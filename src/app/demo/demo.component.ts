/**
 * Componente de demonstração dos recursos do template.
 *
 * @author Márcio Casale de Souza <contato@kazale.com>
 * @since 0.0.1
 */

import { Component } from '@angular/core';

@Component({
	selector: 'kz-demo',
	templateUrl: 'demo.component.html',
	styleUrls: ['demo.component.css']
})
export class DemoComponent {
	data = new Date(2016, 6, 21, 16, 53, 54);

	pagina: number = 0;
	qtdPorPagina: number = 5;

	alunos: any;
	alunosTotal = [
		{id: 1, nome: 'Fulano'},
		{id: 2, nome: 'Ciclano2'},
		{id: 3, nome: 'Beltrano6'},
		{id: 11, nome: 'Fulanho'},
		{id: 12, nome: 'Ciclano'},
		{id: 13, nome: 'Beltrano'},
		{id: 21, nome: 'Fulano'},
		{id: 22, nome: 'Ciclano'},
		{id: 23, nome: 'Belano'},
		{id: 31, nome: 'Funo'},
		{id: 32, nome: 'clano'},
		{id: 33, nome: 'Beltr'},
		{id: 41, nome: 'Fulo'},
		{id: 42, nome: 'Cicano'},
		{id: 43, nome: 'lano'},
		{id: 51, nome: 'Fula'},
		{id: 52, nome: 'Co'},
		{id: 53, nome: 'Beano'},
		{id: 61, nome: 'Fulano'},
		{id: 62, nome: 'ilano'},
		{id: 63, nome: 'Beltrano'},
		{id: 71, nome: 'Fulano'},
		{id: 72, nome: 'Ciao'},
		{id: 73, nome: 'Beao'},
		{id: 81, nome: 'Fuao'},
		{id: 82, nome: 'Ciclano'},
		{id: 83, nome: 'Beltrano'},
		{id: 91, nome: 'Fulano'},
		{id: 92, nome: 'Ciclano'},
		{id: 93, nome: 'Beltrano'},
		{id: 94, nome: 'Beltrano'}
	];

	constructor() {
		this.popularAlunos();
	}

	paginar($event: any) {
		this.pagina = $event - 1;
		this.popularAlunos();
	}

	popularAlunos() {
		this.alunos = [];
		for (let i = ( this.pagina * this.qtdPorPagina ); i < (this.pagina * this.qtdPorPagina + this.qtdPorPagina); i++) {
			if (i >= this.alunosTotal.length) {
				break;
			}
			this.alunos.push(this.alunosTotal[i]);
		}
	}
}
