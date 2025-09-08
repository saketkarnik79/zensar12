using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using API_DemoBasics2.Models.Auth;
using Microsoft.AspNetCore.Identity;

namespace API_DemoBasics2.Controllers.UserManagement
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserRegistrationApiController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;

        public UserRegistrationApiController(UserManager<IdentityUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterUser([FromBody] UserRegistrationModel model)
        {
            if (model==null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = new IdentityUser
            {
                UserName = model.Email,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(user, model.Password);
            if (result.Succeeded)
            {
                return Ok(new { Message = "User registered successfully!" });
            }
            else
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(string.Empty, error.Description);
                }
                return BadRequest(ModelState);
            }
        }
    }
}
