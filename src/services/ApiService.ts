export default class ApiService {
  private static instance: ApiService
  private readonly accessKey: string

  constructor() {
    this.accessKey = process.env.REACT_APP_UNSPLASH_API_KEY
  }

  static get Instance() {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService()
    }
    return ApiService.instance
  }

  async getPhoto(topic: string) {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${topic}&client_id=${this.accessKey}`)
    const data = await response.json()
    return data
  }
}
