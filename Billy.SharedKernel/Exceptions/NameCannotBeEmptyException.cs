namespace Billy.SharedKernel.Exceptions
{
    public class NameCannotBeEmptyException : DomainException
    {
        private const string message = "Name cannot be empty";

        public NameCannotBeEmptyException() : base(message)
        {
        }
    }
}
