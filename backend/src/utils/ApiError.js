class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something went wrong",
        error = []
    ){
        super(message)
        this.message = message
        this.statusCode = statusCode
        this.data = null
        this.success = false
        this.error = error
    }
}

export default ApiError