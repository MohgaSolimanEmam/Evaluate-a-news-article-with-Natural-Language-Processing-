import { resultsTemplate } from './APIresponse'

let mockResponse = {
    polarity: 'negative',
    subjectivity: 'subjective',
    text: 'The worlds butterflies are under intense pressure from habitat destruction and other environmental threats',
    polarity_confidence: 0.41332826018333435,
    subjectivity_confidence: 1
}

test('true is truthy', () => {
    expect(true).toBe(true)
})

test('Adding API response with correct data', () => {
    expect(resultsTemplate(mockResponse)).toBe(`<div id="polarity">negative</div><div id="polarity_confidence">0.41332826018333435</div><div id="subjectivity">subjective</div><div id="subjectivity_confidence">1</div><div id="synopsis">The worlds butterflies are under intense pressure from habitat destruction and other environmental threats</div>`)
})

test('Adding API response with error response', () => {
    expect(resultsTemplate({ bad: 'data' })).toBe("<p>data not available</p>")
})

// test('Adding API response with null response', () => {
//     expect(resultsTemplate({bad: 'data'})).toBe(false);
// })
