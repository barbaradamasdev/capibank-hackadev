using System.Collections;
using Microsoft.AspNetCore.Mvc;
using Troopers.Capibank.Domain.Entities;
using Troopers.Capibank.DTO.User;
using Troopers.Capibank.Exceptions;
using Troopers.Capibank.Mappers;
using Troopers.Capibank.Services;

namespace Troopers.Capibank.Controllers;

[Route("/api/v1/users")]
[ApiController]
public class UserController(IUserService userService, IMapper<UserEntity, UserDto> userMapper) : ControllerBase
{
    [HttpPost]
    public UserDto Create(UserDto userDto)
    {
        var entity = userService.Create(userDto);
        var returnDto = userMapper.FromEntity(entity);
        returnDto.Password = "";

        return returnDto;
    }

    [HttpGet]
    public IEnumerable<UserDto> GetAll() {
        var entities = userService.GetAll();
        var dtos = new List<UserDto>();

        foreach (var entity in entities)
        {
            var dto = userMapper.FromEntity(entity);
            dto.Password = "";
            dtos.Add(dto);
        }

        return dtos;
    }

    [HttpGet("{id}")]
    public UserDto GetById(int id)
    {
        var entity = userService.GetById(id) ?? throw new ResourceNotFoundException($"User with ID: '{id}' not found.");
        
        var dto = userMapper.FromEntity(entity);
        dto.Password = "";

        return dto;
    }

    [HttpGet("email/{email}")]
    public UserDto GetByEmail(string email)
    {
        var entity = userService.GetByEmail(email) ?? throw new ResourceNotFoundException($"User with Email: '{email}' not found.");

        var dto = userMapper.FromEntity(entity);
        dto.Password = "";

        return dto;
    }
}