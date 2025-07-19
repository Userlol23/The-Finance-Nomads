// 1. Display articles
const articles = [
  { title: "Welcome!", content: "This is your first article." },
  { title: "Web Development", content: "Learning HTML, CSS, & JavaScript step by step." }
];

const articlesSection = document.getElementById('articles');
articles.forEach(article => {
  const div = document.createElement('div');
  div.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p>`;
  articlesSection.appendChild(div);
});

// 2. Show a simple chart using Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript'],
    datasets: [{
      label: 'Learning Progress',
      data: [3, 2, 1], // Example numbers
      backgroundColor: ['#e44d26', '#2965f1', '#f0db4f']
    }]
  }
});
