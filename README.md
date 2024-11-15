# Node Hosting Testing 🚀

This is a simple Node.js project that serves as an API to provide information about planets 🌍 in our solar system. The API is hosted and deployed using [Vercel](https://vercel.com). 🌐

## API Endpoints 🛸

### `GET /api/planets` 🌌

Returns a list of all planets in our solar system with detailed information.

#### Example Response:

```json
[
  {
    "id": 1,
    "name": "Mercury",
    "type": "Rocky",
    "diameter": 4879,
    "distanceFromSun": 57910000,
    "moons": 0,
    "description": "The smallest planet in our solar system, closest to the Sun. ☀️"
  },
  ...
]
```
````

### `GET /api/planets/:id` 🌠

Returns information about a specific planet by its ID.

#### Example Response (for `GET /api/planets/1`):

```json
{
  "id": 1,
  "name": "Mercury",
  "type": "Rocky",
  "diameter": 4879,
  "distanceFromSun": 57910000,
  "moons": 0,
  "description": "The smallest planet in our solar system, closest to the Sun. ☀️"
}
```

#### Error Response (if planet is not found):

```json
{
  "message": "Planet not found 😞"
}
```

## Setup and Installation 🛠️

To run this project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/shaaanuu/node-hosting-test.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-hosting-testing
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the local server:

   ```bash
   node api/index.js
   ```

   The app will run on `http://localhost:3000`. 🌍

## Deployment 🚀

This project is deployed on [Vercel](https://vercel.com). Every time you push code to the repository, Vercel automatically redeploys the project with the latest changes.

## License 📄

This project is open-source and available under the [MIT License](LICENSE).

```
