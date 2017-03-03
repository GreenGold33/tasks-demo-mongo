$('.remove').on('click', function(e) {
  e.preventDefault()
  const url = this.href
  const method = "DELETE"
  $.ajax({ url, method })
    .then( () => window.location.reload() )
    .catch( () => console.log('Error!!') )
})

$('.edit').on('click', function(e) {

  const url = $(this).parent().find('input[name="url"]').val()
  const title = $(this).parent().find('input[name="title"]').val()

  const $form = $('form.edit-task')
  $form.attr("action", url)
  $form.find('input[name="title"]').val(title)

})

$('form.edit-task').on('submit', function(e) {
  e.preventDefault()
  const $form = $(this)
  const title = $form.find('input[name="title"]').val()
  const done = $form.find('input[name="done"]').is(":checked")

  const url = this.action
  const method = 'PUT'
  const data = `title=${title}&done=${done}`

  $.ajax({  url, method, data })
    .then( () => window.location.reload() )
    .catch( () => console.log('Error!!') )

})