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
    "summary": "test",
    "details": "test details",
    "resolution": "test resolution",
    "type": "Missing"
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
            "declared": "Apache-1.0 AND MIT"
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
        "summary": "test",
        "details": "test details",
        "resolution": "test resolution",
        "type": "Missing"
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
                        "declared": "Apache-1.0 AND MIT"
                    }
                }
            }
        }
    ]
}'
```

Alternatively you can also use some API Client tool to send the above request.
