var quill = new Quill('#editor', {
  modules: {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'font': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      // [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['blockquote', 'code-block']
    ]
  },
  placeholder: 'Мыслям загорелся зеленый цвет...',
  theme: 'snow'
});