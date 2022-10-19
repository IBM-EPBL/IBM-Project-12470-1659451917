
                         ##########SCRIPT FOR WATSON#############

<DOCTYPE1! html>
<html>
<h2>My Script</h2>
<body>
<script>
window.watsonAssistantChatOptions = {
integrationID: "b842f6ce-1021-4258-a060-c3356a6d8455", // The ID of this integration.
region: "au-syd", // The region your integration is hosted in.
serviceInstanceID: "37bdda28-1f67-451f-83ff-c1beb1827fe3", // The ID of your service instance.
onLoad: function(instance) { instance.render(); }
};
setTimeout(function(){
const t=document.createElement('script');
t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
(window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
document.head.appendChild(t);
});
</script>
