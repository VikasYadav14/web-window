export const webwindow = (data) => {
    let {weburl,botimage,color,name} = data;

    if(!botimage){botimage="../src/logo.svg"};
    if(!color){color="gray"};
    if(!weburl){weburl="https://www.example.com/"};
    if(!name){name=" "};

    const container = document.getElementById('webwindow')
    const htmlcode = `
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.16/dist/tailwind.min.css" rel="stylesheet">
  <style>
    .chatbox .parent:hover .child {
      opacity: 1;
      height: auto;
      overflow: none;
      transform: translateY(0);
    }

    .chatbox .child {
      opacity: 0;
      height: 0;
      overflow: hidden;
      transform: translateY(-10%);
    }
  </style>
<div class="chatbox">
  <div id="chatbox" class="fixed bottom-4 right-4 md:bottom-12 md:right-12 z-20 hidden">
    <div class="p-2 bg-${color}-300 rounded-md shadow-md">
      <div class="flex text-center justify-between mb-2 bg-${color}-300 px-2">
        <div class="flex items-center">
          <span class="sr-only">Avatar</span>
          <img id="avatar" class="w-8 h-8 mr-2 rounded-full"
            src=${botimage} alt="Bot avatar" height="6"
            width="8" />
            <h1 class="text-lg font-medium">${name}</h1>
        </div>
        <button id="closeButton" class="block lg:hidden p-2 text-sm text-white">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
            </path>
          </svg>
        </button>
        <li class=" relative parent hidden lg:block">
          <a class="flex justify-between md:inline-flex items-center hover:text-[#3100fb] space-x-2"><svg width="12"
              height="12" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="Vector 1"
                d="M1.09822 0H6.8279C7.68191 0 8.14294 1.00141 7.58764 1.65023L4.64537 5.08804C4.23923 5.56259 3.50226 5.55279 3.10888 5.06761L0.321461 1.6298C-0.208555 0.976116 0.256657 0 1.09822 0Z"
                fill="#FFFFFF" />
            </svg>
          </a>
          <ul class="child transition duration-700 md:absolute -right-3 md:w-auto bg-white md:shadow-lg md:rounded-b ">
            <li>
              <button type="button" id="mobileOption" class="p-2 text-sm text-gray-800  "><svg width="8" height="18"
                  viewBox="0 0 10 28" xmlns="http://www.w3.org/2000/svg" class="block mx-auto mb-1 fill-current">
                  <path
                    d="M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z"
                    fill-rule="evenodd"></path>
                </svg></button>
            </li>
            <li>
              <button type="button" id="tabletOption"
                class="p-2 text-sm text-gray-800  text-gray-800 dark:text-gray-500"><svg width="8" height="18"
                  viewBox="0 0 14 28" xmlns="http://www.w3.org/2000/svg" class="block mx-auto mb-1 fill-current">
                  <path
                    d="M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"
                    fill-rule="evenodd"></path>
                </svg></button>
            </li>
            <li>
              <button type="button" id="largeOption" class="p-2 text-sm text-gray-800 "><svg width="24" height="24"
                  viewBox="0 0 38 28" xmlns="http://www.w3.org/2000/svg" class="block mx-auto mb-1 fill-current">
                  <path
                    d="M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z"
                    fill-rule="evenodd"></path>
                </svg></button>
            </li>
            <li>
              <button id="closeButton2" class="p-2 text-sm text-gray-600 ">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFFFFF"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                  </path>
                </svg>
              </button>
            </li>
          </ul>
        </li>
      </div>
      <div>
        <iframe title="myFrame" id="webframe" class="overflow-auto hover:overflow-scroll bg-white"
          src=${weburl} style="border:0;" allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
  <div class="fixed bottom-8 right-8 md:bottom-12 md:right-12 bg-${color}-300 rounded-md p-2">
    <img id="toggleButton" src=${botimage} alt="chatBot"
      height="40" width="40" class="cursor-pointer">
  </div>
</div>`

    container.innerHTML = htmlcode

    const toggleButton = document.getElementById('toggleButton');
    const chatbox = document.getElementById('chatbox');
    const closeButton = document.getElementById('closeButton');
    const closeButton2 = document.getElementById('closeButton2');
    const webFrame = document.getElementById('webframe'); // Corrected variable name
    const mobileOption = document.getElementById('mobileOption');
    const tabletOption = document.getElementById('tabletOption');
    const largeOption = document.getElementById('largeOption');

    // Toggle chatbox visibility when the toggle button is clicked
    toggleButton.addEventListener('click', () => {
        chatbox.classList.toggle('hidden');
    });

    // Close the chatbox when either close button is clicked
    closeButton.addEventListener('click', () => {
        chatbox.classList.add('hidden');
    });

    closeButton2.addEventListener('click', () => {
        chatbox.classList.add('hidden');
    });

    // Function to update the iframe size based on the selected option
    const setSize = (width, height) => {
        // Get the viewport dimensions
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        // Calculate the maximum allowed width and height for the iframe
        const maxWidth = viewportWidth - 40; // Adjust this value as needed
        const maxHeight = viewportHeight - 80; // Adjust this value as needed

        // Convert width and height to numbers (remove the 'px' unit if present)
        const parsedWidth = parseFloat(width);
        const parsedHeight = parseFloat(height);

        // Apply the size to the iframe while ensuring it doesn't exceed the maximum limits
        webFrame.style.width = `${Math.min(parsedWidth, maxWidth)}px`;
        webFrame.style.height = `${Math.min(parsedHeight, maxHeight)}px`;
    };

    setSize('360', '520');
    mobileOption.classList.add(`text-${color}-500`);

    // Event listener for the 'xs' option (mobile size)
    document.getElementById('mobileOption').addEventListener('click', () => {
        setSize('360', '520');
        mobileOption.classList.add(`text-${color}-500`);
        tabletOption.classList.remove(`text-${color}-500`);
        largeOption.classList.remove(`text-${color}-500`);
    });

    // Event listener for the 'sm' option (tablet size)
    document.getElementById('tabletOption').addEventListener('click', () => {
        setSize('720', '560');
        mobileOption.classList.remove(`text-${color}-500`);
        tabletOption.classList.add(`text-${color}-500`);
        largeOption.classList.remove(`text-${color}-500`);
    });

    // Event listener for the 'lg' option (large size)
    document.getElementById('largeOption').addEventListener('click', () => {
        setSize('1080', '600');
        mobileOption.classList.remove(`text-${color}-500`);
        tabletOption.classList.remove(`text-${color}-500`);
        largeOption.classList.add(`text-${color}-500`);
    });

};
