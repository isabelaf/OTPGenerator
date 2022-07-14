using Microsoft.AspNetCore.Mvc;
using OTPGenerator.BLL;
using OTPGenerator.PL.Commands;

namespace OTPGenerator.PL.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OTPController : ControllerBase
    {
        private readonly IOTPValidator otpValidator;

        public OTPController(IOTPValidator otpValidator)
        {
            this.otpValidator = otpValidator;
        }

        [Route("Validate")]
        [HttpPost]
        public IActionResult Validate([FromBody] ValidateOTPCommand command)
        {
            if (otpValidator.ValidateOTP(command.UserId, command.OTP))
                return Ok();
            return BadRequest();
        }
    }
}
