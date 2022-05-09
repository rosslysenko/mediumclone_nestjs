import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
export class TagController {
  constructor(private readonly tagServise: TagService) {}
  @Get()
  findeAll() {
    return this.tagServise.findAll;
  }
}
