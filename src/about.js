const aboutPageContent = {
  heading: "About page",
  body: `<p>Urna condimentum mattis pellentesque id nibh tortor id aliquet. Nisl nisi scelerisque eu ultrices vitae auctor eu. Turpis egestas integer eget aliquet nibh. Eget mi proin sed libero. Mi sit amet mauris commodo quis imperdiet massa. Curabitur vitae nunc sed velit dignissim. Elementum eu facilisis sed odio morbi quis commodo odio. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Elementum nisi quis eleifend quam adipiscing vitae. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Amet luctus venenatis lectus magna fringilla urna. Morbi tincidunt augue interdum velit euismod.</p>
  <p> Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget.In nisl nisi scelerisque eu.Auctor neque vitae tempus quam.Amet consectetur adipiscing elit ut.Nulla facilisi etiam dignissim diam.Nulla pharetra diam sit amet nisl suscipit.Pellentesque habitant morbi tristique senectus et netus et.Eleifend quam adipiscing vitae proin.Pharetra pharetra massa massa ultricies mi quis hendrerit.Et tortor consequat id porta nibh venenatis cras.Pellentesque elit eget gravida cum sociis natoque.A lacus vestibulum sed arcu non odio.Varius sit amet mattis vulputate enim nulla aliquet porttitor lacus.Risus in hendrerit gravida rutrum.Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. </p>
`,

  image: "about.jpg"
};


export function aboutContentGenerator() {
  // For every tab content have a main content div
      let contentDiv = document.createElement("div");
      contentDiv.setAttribute("id", "tabContentDiv");

      // Each tab content should have a main text
      let contentBody = document.createElement("div");
      contentBody.setAttribute("class", "content");
      contentBody.innerHTML = aboutPageContent.body;
      // Each tab content should have an image
      let image = document.createElement("img");
      image.setAttribute("class", "content-img");
      image.setAttribute("src", `./images/${aboutPageContent.image}`);
      return {
        contentDiv,
        contentBody,
        image
      };
};