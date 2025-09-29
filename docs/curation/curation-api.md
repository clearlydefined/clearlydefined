---
layout: default
sidebar_position: 3
---

# Curation via API

This document explains the process of curating licenses by interacting with the specified API endpoint. It provides a detailed breakdown of the JSON payload required and explains each key in the context of licensing curation.

## API Endpoint

The API endpoint to be used for curating licenses is:

```
https://api.clearlydefined.io/curations
```

### Method

HTTP method to be used for interacting with the API endpoint is:

```
PATCH
```

### Complete JSON Payload Example

Below is the full JSON payload structure with all elements combined, which can be used to send a PATCH request to the API endpoint:

```json
{
  "contributionInfo": {
    "summary": "org.glassfish.jersey.core:jersey-client 2.25.1",
    "details": "Add CDDL-1.1 OR GPL-2.0-only WITH Classpath-exception-2.0",
    "resolution": "https://repo1.maven.org/maven2/org/glassfish/jersey/core/jersey-client/2.25.1/jersey-client-2.25.1.pom",
    "type": "Incorrect"
  },
  "patches": [
    {
      "coordinates": {
        "type": "maven",
        "provider": "mavencentral",
        "namespace": "org.glassfish.jersey.core",
        "name": "jersey-client"
      },
      "revisions": {
        "2.25.1": {
          "licensed": {
            "declared": "CDDL-1.1 OR GPL-2.0-only WITH Classpath-exception-2.0"
          }
        }
      }
    }
  ]
}
```

### Explanation on Payload structure

To curate licenses for a software package, you need to send a JSON payload with specific information about the contribution and the revisions. Below is an elaborated explanation of the JSON payload structure.

### Contribution Information

The `contributionInfo` object encapsulates the details about the contribution related to licensing. It includes the following keys:

- **summary**: A short summary of the nature of the contribution. This corresponds to the `title` field in the UI.
- **details**: A detailed description of the contribution.
- **resolution**: The resolution or method applied to address the issue described in the contribution.
- **type**: The type of issue or curation being addressed. Example: `"Missing"`. The type is limited to values from the list below:

1. Missing
2. Incorrect
3. Incomplete
4. Ambiguous
5. Other

### Coordinates

The `coordinates` object provides the necessary details to identify the software component whose license is being curated. It includes:

- **type**: The package management system type (e.g., `"maven"`).
- **provider**: The source or provider of the package (e.g., `"mavencentral"`).
- **namespace**: The namespace under which the package is categorized (e.g., `"org.glassfish.jersey.core"`). In case namespace is not present in the coordinate, you can remove the namespace field or you can provide '-' as the value.
- **name**: The name of the package (e.g., `"jersey-client"`).

### Revisions

The `revisions` object maps specific versions of the package to their respective license information.

- **version number**: Denotes the particular version of the package (e.g., `"2.25.1"`).
- **licensed**: An object containing declared licensing information.
- **declared**: The license(s) declared for the specified package version (e.g., `"Apache-1.0 AND MIT"`).

Please note that the license expression should follow SPDX naming conventions. For more information, refer to [SPDX Licenses](https://spdx.org/licenses/).

For complex license expression please follow [Composite License Expressions](https://spdx.github.io/spdx-spec/v3.0.1/annexes/spdx-license-expressions/#composite-license-expressions)

## Sending the Request

To send the curation request, perform an HTTP PATCH request with the JSON payload to the specified API endpoint. Here is an example using `curl`:

```bash
curl -X PATCH https://api.clearlydefined.io/curations \
-H "accept: application/json" \
-H "Content-Type: application/json" \
-d '{
    "contributionInfo": {
        "summary": "org.glassfish.jersey.core:jersey-client 2.25.1",
        "details": "Add CDDL-1.1 OR GPL-2.0-only WITH Classpath-exception-2.0",
        "resolution": "https://repo1.maven.org/maven2/org/glassfish/jersey/core/jersey-client/2.25.1/jersey-client-2.25.1.pom",
        "type": "Incorrect"
    },
    "patches": [
        {
            "coordinates": {
                "type": "maven",
                "provider": "mavencentral",
                "namespace": "org.glassfish.jersey.core",
                "name": "jersey-client"
            },
            "revisions": {
                "2.25.1": {
                    "licensed": {
                        "declared": "CDDL-1.1 OR GPL-2.0-only WITH Classpath-exception-2.0"
                    }
                }
            }
        }
    ]
}'
```

Alternatively you can also use some API Client tool to send the above request.

## File level Curation

In addition to curating the declared license for a package, curation can also be performed at the file level. For example, you may want to update the license information specifically for individual files such as package/README.markdown and package/package.json. Furthermore, you can update both the license details and attributions within files like package/LICENSE.markdown. To accomplish this, you can use the payload shown below

```json
{
  "contributionInfo": {
    "summary": "jszip 3.1.5 license clarification",
    "details": "Add/clarify license information and attributions for jszip 3.1.5",
    "resolution": "https://github.com/Stuk/jszip",
    "type": "Incomplete"
  },
  "patches": [
    {
      "coordinates": {
      "type": "npm",
      "provider": "npmjs",
      "name": "jszip"
      },
      "revisions": {
        "3.1.5": {
          "described": {
            "releaseDate": "2025-11-09",
            "sourceLocation": {
              "name": "jszip",
              "namespace": "Stuk",
              "provider": "github",
              "revision": "a4138a23cb9b8eb773c19af7d36d5ce2bcf4bfda",
              "type": "git",
              "url": "https://github.com/Stuk/jszip/commit/a4138a23cb9b8eb773c19af7d36d5ce2bcf4bfda"
            }
          },
          "files": [
            {
              "path": "package/README.markdown",
              "license": "GPL-3.0-only OR MIT"
            },
            {
              "path": "package/package.json",
              "license": "GPL-3.0-only OR MIT"
            },
            {
              "path": "package/LICENSE.markdown",
              "license": "GPL-3.0-only OR MIT",
              "attributions": [
                "Copyright (c) 2007 Free Software Foundation, Inc. http://fsf.org/",
                "Copyright (c) 2009-2016 Stuart Knightley, David Duponchel, Franz Buchinger, Antonio Afonso"
              ]
            }
          ]
        }
      }
    }
  ]
}
```
This is the test PR that was generated for the dev repository with above payload: [PR#1585](https://github.com/clearlydefined/curated-data-dev/pull/1585/files)

##### Explaination

- **revisions:** The revisions object maps specific versions of the package to their respective license information.
- **version number:** Denotes the particular version of the package (e.g., "3.1.5").
- **files:** An array of object containing file name and information to be updated.
- **path:** An attribute containing the path of file whose information needs to be updated.
- **license:** The license(s) declared for the specified file (e.g., "Apache-1.0 AND MIT").
- **attributions:** An array of string, containing attributions to be assigned to this file.