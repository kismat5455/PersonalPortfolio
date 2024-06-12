const repoList = document.getElementById("repo-list");

const fetchRepoData = async () => {
  try {
    const response = await fetch(
      "https://kismatpersonalportfolio.onrender.com/repos"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const reposData = await response.json();

    for (let i = 0; i < reposData.length; i++) {
      const repo = reposData[i];

      await new Promise((resolve) => setTimeout(resolve, 120));

      const { name, description, html_url, stargazers_count, forks_count } =
        repo;

      repoList.innerHTML += `
        <div class="bg-white rounded-lg shadow-md p-6 m-4 transition duration-300 hover:scale-105">
          <h3 class="text-xl font-semibold mb-2">${name}</h3>
          <p class="description text-gray-600">${
            description || "No description available."
          }</p>
          <p class="mt-2 text-sm text-gray-500">
            Stars: <span class="font-medium text-yellow-500">${stargazers_count}</span> |
            Forks: <span class="font-medium text-green-500">${forks_count}</span>
          </p>
          <a class="github-link mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            href="${html_url}" target="_blank">
            View on GitHub
          </a>
        </div>
      `;
    }
  } catch (error) {
    console.error("Error fetching repository data:", error);
    repoList.innerHTML += "<div>Error fetching repository data.</div>";
  }
};

fetchRepoData();
