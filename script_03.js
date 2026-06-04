const options = document.querySelectorAll('.option');
        const feedbackDiv = document.getElementById('feedback');

        function resetQuiz() {
            feedbackDiv.className = 'feedback';
            feedbackDiv.innerHTML = '';
            
            // Remove destaque das opções
            options.forEach(option => {
                option.style.backgroundColor = '#f9f9f9';
                option.style.border = '1px solid #ddd';
            });
            
            // Reativa os eventos de clique
            options.forEach(option => {
                option.style.pointerEvents = 'auto';
            });
        }

        options.forEach(option => {
            option.addEventListener('click', function() {
                // Verifica se já foi respondido
                if (this.style.pointerEvents === 'none') return;
                
                const isCorrect = this.getAttribute('data-correct') === 'true';
                
                // Desabilita todas as opções
                options.forEach(opt => {
                    opt.style.pointerEvents = 'none';
                });
                
                
                if (isCorrect) {
                    this.style.backgroundColor = '#d4edda';
                    this.style.border = '2px solid #28a745';
                    feedbackDiv.className = 'feedback correct';
                    feedbackDiv.innerHTML = '✅ Correta! Parabéns! Brasília é a capital do Brasil desde 1960.';
                } else {
                    this.style.backgroundColor = '#f8d7da';
                    this.style.border = '2px solid #dc3545';
                    feedbackDiv.className = 'feedback incorrect';
                    feedbackDiv.innerHTML = '❌ Incorreta! A capital do Brasil é Brasília. Tente novamente clicando no botão abaixo.';
                }
            });
        });