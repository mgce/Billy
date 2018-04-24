namespace Billy.SharedKernel.Exceptions
{
    public class UserIdCannotBeEmptyException : DomainException
    {
        private const string message = "User id cannot be empty";

        public UserIdCannotBeEmptyException() : base(message)
        {
        }
    }
}
