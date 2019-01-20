- Adding AWS lib in services folder and import

  ```
  import './aws-api/lib/axios/dist/axios.standalone.js';
  import './aws-api/lib/CryptoJS/rollups/hmac-sha256.js';
  import './aws-api/lib/CryptoJS/rollups/sha256.js';
  import './aws-api/lib/CryptoJS/components/hmac.js';
  import './aws-api/lib/CryptoJS/components/enc-base64.js';
  import './aws-api/lib/url-template/url-template.js';
  import './aws-api/lib/apiGatewayCore/sigV4Client.js';
  import './aws-api/lib/apiGatewayCore/apiGatewayClient.js';
  import './aws-api/lib/apiGatewayCore/simpleHttpClient.js';
  import './aws-api/lib/apiGatewayCore/utils.js';
  import './aws-api/apigClient.js';
  ```

  - build KO: `Could not resolve './aws-api/lib/url-template/url-template.js' from dist\ars-components\esm2015\lib\services\dummy.service.js`

- Adding AWS lib in `assets/` and import
  ```
  import '../../assets/aws-api/apigClient.js';
  ```
  - build KO: `Could not resolve...`
- Add `script` in `angular.json`:
  ```json
  "ars-components": {
    "root": "projects/ars-components",
    "architect": {
      "build": {
        "scripts": ["projects/ars-components/src/assets/toto.js"]
      },
    }
  }
  ```
  Error
  ```
  Schema validation failed with the following errors:
  Data path "['build']" should NOT have additional properties(scripts).
  Error: Schema validation failed with the following errors:
  Data path "['build']" should NOT have additional properties(scripts).
  ```

- Assets not copied: https://github.com/angular/angular-cli/issues/11071