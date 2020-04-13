function readURL(input) {

    if (input.files && input.files[0]) {
      
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#showimage').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      
        reader = new FileReader();
        reader.onload = function (e) {
            postData(e.target.result)
              .then((data) => {
                console.log(data);
              });
        }
        reader.readAsBinaryString(input.files[0]);
    }
}

$("#captureimage").change(function(){
    readURL(this);
});

// Example POST method implementation:
async function postData(data) {
  // Default options are marked with *
  const response = await fetch('https://api.github.com/repos/Pfiver/plainjs-webcomponent/contents/pic' + new Date().getTime() + '.jpeg', {
    method: 'PUT',
    headers: {
      'Authorization': 'Basic cGZpdmVyOjc3MTI5MzVmMjZmYTQyMzdmZTEyN2UwZTQxYTM1MDQ1NjU3ZjFhNjE='
    },
    body: '{ "content": "' + btoa(data) + '", "message": "add file" }'
  });
  return response.json();
}
