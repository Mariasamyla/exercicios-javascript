   // Pegar os elementos do HTML
        const input = document.getElementById('tarefaInput');
        const botao = document.getElementById('addBtn');
        const lista = document.getElementById('listaTarefas');
        
        // Array para guardar as tarefas
        let tarefas = [];
        
        // Função para mostrar as tarefas na tela
        function mostrarTarefas() {
            // Limpar a lista antes de mostrar de novo
            lista.innerHTML = '';
            
            // Percorrer todas as tarefas
            for(let i = 0; i < tarefas.length; i++) {
                const li = document.createElement('li');
                
                // Criar o texto da tarefa
                const span = document.createElement('span');
                span.textContent = tarefas[i].texto;
                                
                // Criar checkbox para marcar como concluída
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = tarefas[i].completa;
                
                // Função para quando clicar no checkbox
                checkbox.onclick = function() {
                    tarefas[i].completa = !tarefas[i].completa;
                    mostrarTarefas(); // Recarregar a lista
                };
                
                // botão de excluir
                const btnExcluir = document.createElement('button');
                btnExcluir.textContent = 'Excluir';
                btnExcluir.className = 'delete-btn';
                
                // Função para quando clicar no botão excluir
                btnExcluir.onclick = function() {
                    tarefas.splice(i, 1); // Remove a tarefa do array
                    mostrarTarefas(); // Recarregar a lista
                };
                
                li.appendChild(checkbox);
                li.appendChild(span);
                li.appendChild(btnExcluir);
                
                lista.appendChild(li);
            }
        }
        
        // adicionar uma nova tarefa
        function adicionarTarefa() {
            // Pegar o texto do input
            const texto = input.value;
            
            // Verificar se não está vazio
            if(texto === '') {
                alert('Digite uma tarefa!');
                return;
            }
            
            // Criar objeto da tarefa
            const novaTarefa = {
                texto: texto,
                completa: false
            };
            
            // Adicionar ao array
            tarefas.push(novaTarefa);
            input.value = '';
            mostrarTarefas();
        }
        
        // Quando clicar no botão, adicionar a tarefa
        botao.onclick = adicionarTarefa;
        
        // Quando pressionar Enter no input, adicionar a tarefa
        input.onkeypress = function(event) {
            if(event.key === 'Enter') {
                adicionarTarefa();
            }
        };