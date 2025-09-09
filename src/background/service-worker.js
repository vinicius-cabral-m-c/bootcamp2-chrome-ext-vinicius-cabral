chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "focusMode") {
        chrome.tabs.query({ currentWindow: true }, (tabs) => {
            const currentTab = tabs.find(tab => tab.active);
            const otherTabs = tabs.filter(tab => !tab.active);
            const tabIdsToRemove = otherTabs.map(tab => tab.id);
            if (tabIdsToRemove.length > 0) {
                chrome.tabs.remove(tabIdsToRemove);
            }
            sendResponse({ status: "Foco ativado! Outras abas foram fechadas." });
        });
        return true; 
    }
});