using System;
using System.Linq;

namespace OTPGenerator.BLL
{
    public class OTPGenerator : IOTPGenerator
    {
        public string GenerateOTP(string userId)
        {
            var userKey = userId.Sum(c => c);
            var timeKey = DateTime.Now;

            return $"{(timeKey.Year + userKey) % 100:00}{(timeKey.Day + userKey) % 100:00}{(timeKey.Second / 30 + userKey) % 100:00}";
        }
    }
}
