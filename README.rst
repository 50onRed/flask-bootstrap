===============
Flask-Bootstrap
===============

Flask-Bootstrap packages `Twitter's Bootstrap
<http://twitter.github.io/bootstrap/>`_ into an extension that mostly consists
of a blueprint named 'bootstrap'. It can also create links to serve Bootstrap
from a CDN.

Usage
-----

Here is an example::

  from flask.ext.bootstrap import Bootstrap

  [...]

  Bootstrap(app)

This makes some new templates available, mainly ``bootstrap_base.html`` and
``bootstrap_responsive.html``. These are blank pages that include all bootstrap
resources, and have predefined blocks where you can put your content. The core
block to alter is ``body_content``, otherwise see the source of the template
for more possiblities.

The url-endpoint ``bootstrap.static`` is available for refering to Bootstrap
resources, but usually, this isn't needed. A bit better is using the
``bootstrap_find_resource`` template filter, which will CDN settings into
account.

If you are using custom code and still want to use files hosted from a CDN in production
make sure you override the default CDN paths.

Macros
------

A few macros are available to make your life easier. These need to be imported
(I recommend create your own "base.html" template that extends one of the
bootstrap base templates first and including the the macros there).

An example "base.html"::

  {% extends "bootstrap_responsive.html" %}
  {% import "bootstrap_wtf.html" as wtf %}

Forms
~~~~~

The ``bootstrap_wtf`` template contains macros to help you output forms
quickly. The most basic way is using them as an aid to create a form by hand::

  <form class="form form-horizontal" method="post">
    {{ form.hidden_tag() }}
    {{ wtf.form_errors(form, "only") }}

    {{ wtf.horizontal_field(form.field1) }}
    {{ wtf.horizontal_field(form.field2) }}

    <div class="form-actions">
       <button name="action_save" type="submit" class="btn btn-primary">Save changes</button>
    </div>
  </form>

However, often you just want to get a form done quickly and have no need for
intense fine-tuning:

::

  {{ wtf.quick_form(form) }}

Configuration options
---------------------

There are a few configuration options used by the templates:

====================================== ======================================================== ===
Option                                 Default
====================================== ======================================================== ===
``BOOTSTRAP_USE_MINIFIED``             ``True``                                                 Whether or not to use the minified versions of the css/js files.
``BOOTSTRAP_JQUERY_VERSION``           ``'1'``                                                  This version of jQuery is included in the template via Google CDN. Also honors ``BOOTSTRAP_USE_MINIFIED``. Set this to ``None`` to not include jQuery at all. Note that non-minified Bootstrap resources are sometimes missing on bootstrapcdn, so it is best not to use it without turning on ``BOOTSTRAP_USE_MINIFIED``.
``BOOTSTRAP_HTML5_SHIM``               ``True``                                                 Include the default IE-fixes that are usually included when using bootstrap.
``BOOTSTRAP_GOOGLE_ANALYTICS_ACCOUNT`` ``None``                                                 If set, include `Google Analytics <http://www.google.com/analytics>`_ boilerplate using this account.
``BOOTSTRAP_CDN_BASEURL``              A dictionary set up with URLs to ``cdnjs.com``.          The URLs to which Bootstrap and other filenames are appended when using a CDN.
``BOOTSTRAP_CDN_PREFER_SSL``           ``True``                                                 If the ``BOOTSTRAP_CDN_BASEURL`` starts with ``//``, prepend ``'https:'`` to it.

====================================== ======================================================== ===

Installation
------------

Either install from github using ``pip`` or from `PyPI
<http://pypi.python.org/pypi/Flask-Bootstrap>`_.

What's Included
---------------

The JS files included are distribution files provided by Bootstrap 3.

The LESS files needed to create the CSS files. Customizations should be made in the less/flask-bootstrap/ files and inlcuded in flask.less.

The CSS files are compiled from the files in the less folder. In order to make
customizations and compile your own, please install Less.

CHANGES
~~~~~~~

3.0.0
"""""""
* Migrated to BS3
* Included Font Awesome as a part of the compiled CSS
* Created flask-bootstrap less files to allow for custom CSS

