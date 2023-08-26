import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
      private companiesRepository: Repository<Company>,
    ) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.companiesRepository.save(createCompanyDto);
  }

  findAll() {
    return this.companiesRepository.find();
  }

  findOne(id: number) {
    return this.companiesRepository.findOneBy({ id });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.companiesRepository.update(id, updateCompanyDto);
  }

  remove(id: number) {
    return this.companiesRepository.update(id, {isDeleted: true});
  }
}
