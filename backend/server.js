const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));


// Part 6 Connecting the Front End (UI) with the Back End using Node.js and Express
const treeSample = [
    {
        title: 'Root',
        children: [
            {
                title: 'Parent A',
                children: [
                    { title: 'Child A1', children: [] },
                    {
                        title: 'Child A2', children: [
                            {
                                title: 'Child A21', children: []
                            },
                            {
                                title: 'Child A22', children: []
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Parent B',
                children: [
                    {title: 'Child B1', children: []},
                    {title: 'Child B2', children: []},
                    {title: 'Child Parent B3', children: []}
                ]
            }

        ]
    }
]

const Categories = [
    {
        category: 'Category 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ligula lacus. Fusce auctor dui nec tellus sodales, quis viverra risus lacinia. Vivamus eu felis sit amet elit consequat mattis. Proin id ligula vel mi fringilla tincidunt. Nulla facilisi. Sed vel nulla vehicula, fermentum risus non, pellentesque nulla. Suspendisse ut fringilla turpis, quis lobortis purus. Proin condimentum est eu purus venenatis, vel auctor libero venenatis. Nam lacinia tempus aliquet. Nullam nec nulla vel lacus commodo eleifend. Cras dictum, eros sit amet elementum tempus, velit felis mollis lacus, eget facilisis ex sapien ut libero. Aliquam pharetra justo vel nunc convallis, sit amet mattis enim semper. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc volutpat, sem nec sodales dignissim, augue arcu convallis sapien, eu dictum metus mi sed eros. Integer commodo venenatis erat, id ultricies lorem gravida nec. Ut venenatis, enim id egestas vehicula, sem nibh gravida tortor, sed vestibulum velit odio nec nulla. Phasellus dapibus eros nec tincidunt eleifend. Duis maximus ante eget magna interdum, a hendrerit ligula hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce faucibus efficitur risus, eget malesuada neque faucibus nec. Sed vitae pretium justo, eu convallis nulla. Proin suscipit nunc et aliquet dictum. Donec elementum justo sed est fringilla, id fermentum nunc dignissim. Cras eu massa non arcu dapibus tincidunt. Aliquam erat volutpat. Proin ac felis vitae ipsum ultrices facilisis at id dui. Cras dictum ante velit, non tempor ex accumsan eget. Mauris sed ullamcorper odio. Nullam in tortor a justo gravida sollicitudin. Cras nec dapibus velit. Integer sed consequat justo. Nam et purus ullamcorper, tristique nulla eu, laoreet sem. Sed tempus nisl ac eros dignissim, ut fermentum turpis convallis. Donec a massa ac eros suscipit dictum eu vitae leo. Donec non posuere tortor, in varius quam. Phasellus tincidunt luctus nunc, nec faucibus sem eleifend at. Fusce semper auctor nulla, at lacinia elit vestibulum ut. Nulla scelerisque, leo eget placerat rutrum, mi justo posuere lectus, nec hendrerit eros ante eu tellus. Nam volutpat aliquam urna, in interdum leo vulputate et. Fusce ac justo condimentum, posuere orci vel, fringilla ipsum. Nullam sit amet fringilla orci. Vestibulum in ipsum lectus. Nam in eros diam. Integer nec nisi velit. Donec efficitur felis nec lacus placerat, eget gravida erat gravida.'
    },
    {
        category: 'Category 2',
        content: 'Praesent tincidunt, purus id bibendum rutrum, lacus odio tristique lorem, vitae malesuada eros dolor non eros. Nulla facilisi. Donec pretium bibendum posuere. Duis id neque rhoncus, feugiat enim eu, dapibus felis. Phasellus quis sapien vitae felis ullamcorper vulputate eget sed augue. Nam nec augue vel tortor lacinia blandit. Vestibulum nec orci id turpis varius bibendum. Ut at dapibus velit. Curabitur ac magna eget elit suscipit convallis. Suspendisse potenti. In hac habitasse platea dictumst. Nam id arcu id leo volutpat laoreet. Nulla facilisi. Integer sit amet quam sit amet ligula rhoncus bibendum non nec libero. Suspendisse varius vestibulum neque vel placerat.'
    },
    {
        category: 'Category 3',
        content: 'Sed accumsan, eros vel tincidunt volutpat, dolor lacus lacinia eros, nec scelerisque justo ipsum ac purus. Suspendisse potenti. Sed rhoncus, lectus at vehicula sollicitudin, justo lectus fringilla elit, id vestibulum quam orci vel orci. Vivamus nec tempus turpis. Morbi tincidunt felis a mauris fermentum, in fermentum magna tempor. Cras eget ligula auctor, egestas eros eu, vestibulum velit. Donec eget tincidunt sapien. Donec faucibus purus eu nulla efficitur vestibulum. Suspendisse dapibus volutpat metus non feugiat. Vivamus convallis libero at magna eleifend faucibus. Sed bibendum est nec mi pellentesque, ut scelerisque eros venenatis. Nullam tristique elit justo, non placerat quam tempor a. Ut elementum interdum magna, ut lobortis justo posuere id. Sed pharetra, felis ac suscipit lobortis, metus mi efficitur risus, et tristique est risus vitae nunc. Integer et neque id odio dictum dictum. Morbi a ullamcorper leo. Phasellus nec turpis scelerisque, dictum purus ac, tempus lacus.'
    }
]

app.get('/api/tree', (req, res) => {
    res.json(treeSample);
});

app.get('/api/categories', (req, res) => {
    res.json(Categories);
});

// Serve the frontend index.html for any other route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
