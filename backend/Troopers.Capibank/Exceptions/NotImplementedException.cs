using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;

namespace Troopers.Capibank.Exceptions;

public class NotImplementedExceptionHandler(ILogger<NotImplementedExceptionHandler> logger) : IExceptionHandler
{
    public async ValueTask<bool> TryHandleAsync(HttpContext httpContext, Exception exception, CancellationToken cancellationToken)
    {
        if (exception is not NotImplementedException)
        {
            return false;
        }

        logger.LogError("Not Implemented: {}", exception.Message);

        var problemDetails = new ProblemDetails
        {
            Status = StatusCodes.Status501NotImplemented,
            Type = exception.GetType().Name,
            Title = exception.GetType().Name,
            Detail = exception.Message,
            Instance = $"{httpContext.Request.Method} {httpContext.Request.Path}"
        };

        httpContext.Response.StatusCode = StatusCodes.Status501NotImplemented;

        await httpContext.Response.WriteAsJsonAsync(problemDetails, cancellationToken: cancellationToken);

        return true;
    }
}