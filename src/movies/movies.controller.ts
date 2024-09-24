import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAll() {
        return "Здесь будут возвращаться все фильмы";
    }

    @Get('/:id') 
    getOne(@Param('id') id: string) {
        return `Здесь будет возвращаться один фильм с id ${id}`;
    }

    @Post() 
    create() {
        return 'Эта функция создает новый фильм';
    }

    @Delete('/:id') 
    remove(@Param('id') id: string) {
        return `Эта функция будет удалять фильм c id ${id}`;
    }

    @Patch('/:id') 
    patch(@Param('id') id: string) {
        return `Эта функция будет редактировать фильм с id ${id}`;
    }
}
