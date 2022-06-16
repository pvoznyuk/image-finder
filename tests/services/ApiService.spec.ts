import ApiService from '../../src/services/ApiService'

describe('ApiService', () => {
  const MOCK_PHOTO = {
    id: '1',
    urls: {
      small: 'https://img',
    },
    description: 'desc',
  }

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_PHOTO),
    }),
  ) as jest.Mock

  it('should be defined', () => {
    expect(ApiService).toBeDefined()
  })

  it('should call the api', () => {
    const apiService = ApiService.Instance
    apiService.getPhoto('Travel')
    expect(global.fetch).toHaveBeenCalledWith('https://api.unsplash.com/photos/random?query=Travel&client_id=undefined')
  })
})
