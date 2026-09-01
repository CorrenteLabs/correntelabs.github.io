# Substituir os placeholders de screenshots

Os 5 ficheiros abaixo, em `assets/img/screenshots/`, são placeholders gerados
automaticamente. Basta substituir cada um por uma captura real **com o mesmo
nome de ficheiro** — o `index.html` não precisa de nenhuma alteração.

| Ficheiro | Ecrã a capturar | Projeto |
|---|---|---|
| `ndc-tools-01.png` | Hub principal (as 5 ferramentas) | NDC Tools |
| `ndc-tools-02.png` | Seatmap — mapa de lugares | NDC Tools |
| `ndc-tools-03.png` | Offer Price — comparação de tarifas | NDC Tools |
| `solar-dashboard-01.png` | Visão geral — KPIs + zona de upload | Dashboard Solar |
| `solar-dashboard-02.png` | Secção de gráficos (G1 em diante) | Dashboard Solar |

## Recomendações técnicas

- **Formato:** PNG (mesma extensão dos placeholders).
- **Proporção:** ~16:10 (os cartões cortam a imagem por `object-fit: cover`,
  por isso proporções muito diferentes vão recortar conteúdo importante).
- **Resolução sugerida:** 1600×1000 px ou superior — a página redimensiona
  para baixo, nunca para cima.
- **Conteúdo:** usa dados de exemplo/fictícios nas capturas do Dashboard
  Solar e do NDC Tools, não dados reais de reservas ou da tua instalação,
  já que a página fica pública.

## Se quiseres trocar os nomes de ficheiro ou adicionar mais capturas

Cada bloco de screenshots está em `index.html`, dentro de `<div class="shot-row">`
logo a seguir aos dados de cada projeto. Cada imagem é um `<figure>` com um
`<div class="shot-frame"><img ...></div>` e uma legenda `<figcaption>` — copia
o bloco todo para adicionar uma 4ª captura, ou remove um para ficar só com 2.
