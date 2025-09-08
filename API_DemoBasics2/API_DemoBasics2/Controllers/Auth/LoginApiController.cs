using API_DemoBasics2.Models.Auth;
using API_DemoBasics2.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;

namespace API_DemoBasics2.Controllers.Auth
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginApiController : ControllerBase
    {
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly JwtIssuanceService _jwtIssuanceService;

        public LoginApiController(SignInManager<IdentityUser> signInManager, JwtIssuanceService jwtIssuanceService)
        {
            _signInManager = signInManager;
            _jwtIssuanceService = jwtIssuanceService;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest("Invalid login request.");

            }
            var result=await _signInManager.PasswordSignInAsync(loginModel.Email, loginModel.Password, false, false);
            if (result.Succeeded)
            {
                //var user = await _signInManager.UserManager.FindByEmailAsync(loginModel.Email);
                var roles = new List<string> { "PowerUsers" };
                var token = _jwtIssuanceService.GenerateToken(loginModel.Email, roles);
                return Ok(new 
                { 
                    Message = "Login successful.",
                    Token = token
                });
            }
            else
            {
                return Unauthorized("Invalid email or password.");
            }
        }
    }
}
