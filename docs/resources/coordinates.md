---
layout: default
sidebar_position: 3
title: Coordinates
---

# Coordinates

Coordinates are used to identify various elements in
ClearlyDefined. For example, components to harvest, tool outputs,
source locations. The coordinates for an entity has at least five
parts: type, provider, namespace, name and revision.

- type -- the form of the entity being identified. For example, `git`,
  `npm`, `sourceArchive`. This is logically, though not actually,
  equivalent to a mime type.

- provider -- where entity can be found. Examples include `github`,
  `npmjs`, `mavenCentral`. The system supports a finite set of
  providers at any given time.

- namespace -- a qualifier that helps scope the name of the entity
  being identified. This typically comes from the context of the
  type. For example, for NPM packages, it is the `scope`, for Maven
  project it would be the `groupid`, and for GitHub, the `login`
  (often `org`) is used. If an entity does not have a reasonable
  namespace, a `-` (hyphen) must be used. That is, the namespace is
  logically optional but the property must be set.

- name -- the name of the entity. As with `namespace`, the name
  typically comes from the context of the type. So `artifactid` for
  Maven, repo `name` for GitHub, etc.

- revision -- the instance of the entity being identified. The exact
  form of the revision depends on the type and provider. In Git, a
  commit hash is used. In package managers, the typical package
  version is used. This value is largely uninterpreted by
  ClearlyDefined and simply either passed to the provider as needed or
  used as an opaque string in internal keys.

## Purl type mapping

Examples below illustrate coordinates for each of the following purl type supported. In general, the following holds true:

purl Type = type coordinate  
purl namespace = namespace coordinate  
purl name = name coordinate  
purl version = revision coordinate

There are some exceptions however, which are provided in the notes below.

### cocoapods https://cdn.cocoapods.org/.

-> pod (coordinate)  
e.g. pod/cocoapods/-/SoftButton/0.1.0

### cargo https://crates.io/.

-> crate (coordinate)  
e.g. crate/cratesio/-/bitflags/1.0.4

### composer https://packagist.org.

-> composer (coordinate)  
e.g. composer/packagist/symfony/polyfill-mbstring/1.11.0

### conda https://repo.anaconda.com.

-> conda (coordinate)  
e.g. conda/conda-forge/linux-aarch64/numpy/1.16.6-py36hdc1b780_0  
notes:  
channel -> provider coordinate  
3 providers: anaconda-main, anaconda-r, conda-forge  
subdir -> namespace coordinate  
version-build -> revision coordinate  
e.g.  
pkg:conda/absl-py@0.4.1?build=py36h06a4308_0&channel=main&subdir=linux-64&type=tar.bz2  
-> conda/anaconda-main/linux-64/absl-py/0.4.1-py36h06a4308_0

### deb

-> deb (coordinate)  
e.g. deb/debian/-/mini-httpd/1.30-0.2_arm64  
notes:  
version_architecture -> revision coordinate  
source package:  
debsrc/debian/-/mini-httpd/1.30-0.2

### gem https://rubygems.org.

-> gem (coordinate)  
e.g. gem/rubygems/-/sorbet/0.5.11226

### github https://github.com.

-> git/github (coordinate type/provider)  
e.g. git/github/ratatui-org/ratatui/bcf43688ec4a13825307aef88f3cdcd007b32641

### golang for Go packages:

-> go (coordinate)  
e.g. go/golang/rsc.io/quote/v1.3.0  
name is url encoded.

### maven https://repo.maven.apache.org/maven2.

-> maven (coordinate)  
three providers: mavencentral, mavengoogle and gradleplugin  
e.g.  
maven/mavencentral/org.apache.httpcomponents/httpcore/4.3  
maven/mavengoogle/android.arch.lifecycle/common/1.0.1  
maven/gradleplugin/io.github.lognet/grpc-spring-boot-starter-gradle-plugin/4.6.0  
note:  
source component:  
sourcearchive/mavencentral/org.apache.httpcomponents/httpcore/4.3

### npm

-> npm (coordinate)  
e.g. npm/npmjs/-/redis/0.1.0  
namespace is used for scope

### nuget: https://www.nuget.org.

-> nuget (coordinate)  
e.g. nuget/nuget/-/xunit.core/2.4.1

### pypi https://pypi.org

-> pypi (coordinate)  
e.g. pypi/pypi/-/backports.ssl_match_hostname/3.7.0.1
