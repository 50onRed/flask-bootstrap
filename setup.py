import os

from setuptools import setup


def read(fname):
    return open(os.path.join(os.path.dirname(__file__), fname)).read()


setup(
    name='Flask-Bootstrap',
    version='3.0.0',
    url='https://github.com/50onRed/flask-bootstrap',
    license='BSD',
    author='Bernie Zang. Originally created by Marc Brinkmann',
    author_email='bzang@50onred.com',
    description='An extension that includes Twitter\'s Bootstrap in your '
                'project, without any boilerplate code.',
    long_description=read('README.rst'),
    packages=['flask_bootstrap'],
    zip_safe=False,
    include_package_data=True,
    platforms='any',
    install_requires=[
        'Flask>=0.8'
    ],
    classifiers=[
        'Environment :: Web Environment',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: BSD License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Topic :: Internet :: WWW/HTTP :: Dynamic Content',
        'Topic :: Software Development :: Libraries :: Python Modules'
    ]
)
