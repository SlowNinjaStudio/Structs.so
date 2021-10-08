/**
 * Encapsulate and abstract HTTP request methods.
 */
export class JsonAjaxer {
  async get (url) {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow'
    });
    return response.json();
  }
}
