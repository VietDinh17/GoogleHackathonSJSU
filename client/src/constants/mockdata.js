export const problems = [
    {
        "id":"112",
        "title": "Reverse an Array",
        "difficulty": "Easy",
        "code":[ `        int[] array = new array[]{1, 2, 3, 4, 5};

        for(int i = 0; i < `,
        
             `; i++) {	
        
            int temp = array[i];
        
            array[i]   = array[array.length - i - 1]; 	
        
            array[array.length - i - `,
        
            ` ] = temp; 
        
        }`],
        "ans": ['array.length/2', '1']
    },
    {
        "id":"113",
        "title": "Sum of left diagonal of 2D array",
        "difficulty": "Easy", 
        "code":[ `        int[][] array = new int[][] {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

        int sum = 0;
    
        for(int row = 0 ; row < array.length ; row++)
    
        {
    
          for(int column = 0; column< `, `; column++) {
    
            if(`,`)
    
            sum += array[row][column];
    
          }
    
        }`
    
      ],
    
      "ans":[ `array[row].length`,`row==column`]
    },
    {
        "id":"224",
        "title": "Binary Search (Recursive)",
        "difficulty": "Medium",
        "code":[ `            int binarySearch(int arr[], int left, int right, int key)  {

            if (`,`) {
      
              int mid = left + (right - left) / 2;
      
              if (arr[mid] == key)
      
                return mid;
      
              if (arr[mid] > key)
      
                return binarySearch(arr, left, mid - 1, key);
      
                
      
              `,`
      
            }
      
            return -1;
      
          }`
      
        ],
      
        "ans":[`r >= left`,`return binarySearch(arr, mid + 1, right, key);`]
    },
    {
        "id":"225",
        "title": "Insertion Sort",
        "difficulty": "Medium",
        "code":[ `int array[] = { 12, 11, 13, 5, 6 };

        int n = array.length; 
    
        for (int i = 1; i < n; ++i) {
    
          int key = array[i];
    
          int j = i - 1;
    
          
    
          while (j >= 0 && `,`) {
    
            array[j + 1] = array[j];
    
            `,`
    
          }
    
          array[j + 1] = key;
    
}`
    
      ],
    
      "ans":[`array[j] > key`,` j = j - 1;`]
    },
    {
        "id":"311",
        "title": "Depth First Search of a Graph",
        "difficulty": "Hard",
        "code":[ `        int vertice;

        LinkedList<Integer> adjacent[];
    
    ​
    
        void DFSUtil (int vertice, boolean visited[]) {
    
          visited[vertice] = true; 
    
          System.out.print(vertice+" "); 
    
          Iterator<Integer> i = adjacent[vertice].listIterator(); 
    
          while (i.hasNext()) 
    
          { 
    
            int n = i.next(); 
    
            if (!visited[n])
    
              `,`
    
          }
    
        }`
    
      ],
    
      "ans":[`DFSUtil(n, visited);`]
    },
    
    
] 