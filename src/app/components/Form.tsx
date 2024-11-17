/* eslint-disable */
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Calendar } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const FilterForm = () => {
    const form = useForm({
        defaultValues: {
            period: '',
            documentType: 'Nota fiscal de serviço',
            issuer: '',
            taxValue: '',
            netValue: ''
        }
    });

    const [date, setDate] = React.useState(null);

    const onSubmit = (data: any) => {
        console.log({
            ...data,
            period: date
        });
    };

    const handleReset = () => {
        form.reset();
        setDate(null);
    };

    return (
        <Card className="w-full mx-auto border-none shadow-none">
            <CardContent>
                <Alert className="mb-6 bg-gray-50">
                    <AlertDescription>
                        Selecione o tipo de documento necessário para, a partir dele, selecionar os tipos de índice para a filtragem.
                    </AlertDescription>
                </Alert>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-2">
                        <Label>Período de criação</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start text-left font-normal"
                                >
                                    {date ? (
                                        format(date, "dd/MM/yyyy", { locale: ptBR })
                                    ) : (
                                        <span className="text-gray-500">Selecionar período</span>
                                    )}
                                    <Calendar className="ml-auto h-4 w-4" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <CalendarComponent
                                    mode="single"
                                    selected={date || undefined}
                                    onSelect={(value: any) => setDate(value)}
                                    locale={ptBR}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <Label>Tipo de documento</Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full justify-between">
                                    {form.watch('documentType')}
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-full min-w-[240px]">
                                <DropdownMenuItem onClick={() => form.setValue('documentType', 'Nota fiscal de serviço')}>
                                    Nota fiscal de serviço
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => form.setValue('documentType', 'Nota fiscal de produto')}>
                                    Nota fiscal de produto
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => form.setValue('documentType', 'Recibo')}>
                                    Recibo
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="space-y-2">
                        <Label>Emitente</Label>
                        <Input
                            placeholder="Razão social do emitente"
                            {...form.register('issuer')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Valor total dos tributos</Label>
                        <Input
                            placeholder="Valor em R$"
                            {...form.register('taxValue')}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Valor líquido</Label>
                        <Input
                            placeholder="Valor em R$"
                            {...form.register('netValue')}
                        />
                    </div>

                    <div className="flex justify-end space-x-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleReset}
                        >
                            Limpar
                        </Button>
                        <Button type="submit" className="bg-green-500 hover:bg-green-600">
                            Aplicar filtro
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};

export default FilterForm;