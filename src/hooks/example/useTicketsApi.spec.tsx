import { renderHook } from '@testing-library/react-hooks'


//mock out dependencies
const get = td.func()
const useApiDouble = {
  useApi: () => {
    return {
      get
    }
  }
}
td.replace('./useApi', useApiDouble)

// now that dependencies are mocked, go ahead and REQUIRE test subject
const { useTicketsApi } = require('./useTicketsApi')


afterEach(() => {
  td.reset() // resets all test doubles
})

test('getTicketById returns the expected ticket', async () => {
  const expectedId = 76
  const expectedUrl = `tickets/${expectedId}`
  const expectedTicket = {
    id: expectedId,
    description: 'description',
    assigneeId: null,
    completed: false
  }
  td.when(get(expectedUrl))
    .thenResolve(expectedTicket)

  // render the hook in an unseen component
  const { result } = renderHook(() => useTicketsApi())

  const actual = await result.current.getTicketById(expectedId)
  expect(actual).toEqual(expectedTicket)
})
