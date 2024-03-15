namespace Troopers.Capibank.Util.Validators;

public interface IValidator<T>
{
    bool Validate(T data);
}