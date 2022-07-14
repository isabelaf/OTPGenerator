namespace OTPGenerator.BLL
{
    public interface IOTPGenerator
    {
        public string GenerateOTP(string userId);
    }
}
