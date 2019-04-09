nprogress.configure({
    easing: 'ease',
    speed: 500,
    showSpinner: false,
})

axios.interceptors.request.use((config) => {
    nprogress.start()
    nprogress.inc(0.3)
    return config
}, (error) => {
    nprogress.done()
    return Promise.reject(error)
})

axios.interceptors.response.use((response) => {
    nprogress.done()
    return response
}, (error) => {
    nprogress.done()
    return Promise.reject(error)
})