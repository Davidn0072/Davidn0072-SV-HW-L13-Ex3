function handleTyping()
{
  sessionStorage.setItem(
    'formDraft',
    JSON.stringify({
      name: document.getElementById('genInput').value,
      email: document.getElementById('genEmlInput').value
    })
  );
  //const jsonData = JSON.stringify(data);
  //sessionStorage.setItem('myInputs', jsonData);
}

function Load()
{
  try {
    const savedData = sessionStorage.getItem('formDraft');
    if (savedData) {
      const formDraft = JSON.parse(savedData);
      document.getElementById('genInput').value = formDraft.name || '';
      document.getElementById('genEmlInput').value = formDraft.email || '';
  }
  } catch (error) {
    alert("שגיאה:", error.message);
  }
}

Load()