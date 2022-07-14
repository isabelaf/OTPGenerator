namespace OTPGenerator.BLL
{
    public interface IOTPValidator
    {
        bool ValidateOTP(string userId, string otp);
    }
}
