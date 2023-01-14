import {
  IsString,
  IsNotEmpty,
  IsEmail,
  Length,
  IsOptional,
  IsPositive,
  IsNumber,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  @ApiProperty()
  @IsNotEmpty()
  readonly customerId: number;
}

export class UpdateOrderDto extends PartialType(CreateOrderDto) {}
