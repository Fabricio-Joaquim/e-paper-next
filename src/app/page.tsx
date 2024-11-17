'use client';

import { Filter } from 'lucide-react';
import * as React from 'react';
import { useState } from "react";
import '@/lib/env';

import { ComboboxComponent } from '@/components/combox';
import { ModalComponent } from '@/components/modal';
import { SideModalComponent } from '@/components/side-modal';
import TableComponent from '@/components/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import FilterForm from '@/app/components/Filter';
import DocumentForm from '@/app/components/Form'

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const itemsPerPage = 10;
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const tableHeaders = [
    { key: 'select', label: '', isCheckbox: true },
    { key: 'name', label: 'Nome do documento', sortable: true },
    { key: 'emitter', label: 'Emissor', sortable: true },
    { key: 'tribValueTotal', label: 'Valor total', sortable: true },
    { key: "liquidValue", label: "Valor líquido", sortable: true },
    { key: "createdAt", label: "Data de criação", sortable: true },
    { key: "updatedAt", label: "Data de atualização", sortable: true },
    { key: 'actions', label: 'Ações', hidden: true },
  ];

  const tableData = [
    {
      name: "John Doe",
      emitter: "John Doe",
      tribValueTotal: "101,00",
      liquidValue: "101,00",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      actions: <Button variant="outline" size="sm">Edit</Button>
    },
    {
      name: "Jane Doe",
      emitter: "Jane Doe",
      tribValueTotal: "102,00",
      liquidValue: "102,00",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      actions: <Button variant="outline" size="sm">Edit</Button>
    },
    {
      name: "John Smith",
      emitter: "John Smith",
      tribValueTotal: "103,00",
      liquidValue: "103,00",
      createdAt: "2021-01-01",
      updatedAt: "2021-01-01",
      actions: <Button variant="outline" size="sm">Edit</Button>
    }
  ];


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const frameworks = [
    {
      value: "1",
      label: "1",
    },
    {
      value: "2",
      label: "2",
    },
    {
      value: "3",
      label: "3",
    },
    {
      value: "4",
      label: "4",
    },
    {
      value: "5",
      label: "6",
    },
  ]

  const otherOptions = [
    {
      value: "new",
      label: "Novo documento",
    },
  ]

  return (
    <main>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col gap-4'>
          <h1>Documentos</h1>
          <h6>Crie, gerencie e visualize os documentos</h6>
        </div>
        <div className='flex items-center gap-4'>
          <Input type="text" placeholder="Pesquisar" />
          <Button variant="outline" size="sm" onClick={() => setOpenFilter(true)} type='button'>
            <Filter />
            Filtrar
          </Button>
        </div>
      </div>
      <Separator className="my-7" />
      <div className="flex items-center justify-between mb-5">
        <section className="flex items-center gap-5">
          <ComboboxComponent options={frameworks} />
          <ComboboxComponent options={otherOptions} />
        </section>
        <Button type='button' onClick={() => setOpen(true)}>Novo documento</Button>
      </div>
      <ModalComponent
        title="Criar novo documento"
        description="Inserir os dados necessários para criar"
        open={open}
        onOpenChange={setOpen}
      >
        <DocumentForm />
      </ModalComponent>


      <SideModalComponent
        title="Filtrar documentos"
        description="Indique os dados necessários para realizar a filtragem"
        open={openFilter}
        onOpenChange={setOpenFilter}
      >
        <FilterForm />
      </SideModalComponent>
      <div className="">
        <TableComponent
          headers={tableHeaders}
          data={tableData}
          caption="A list of your recent invoices."
          pagination={{
            currentPage,
            totalPages,
            onPageChange: handlePageChange,
          }}
        />
      </div>
    </main >
  );
}
