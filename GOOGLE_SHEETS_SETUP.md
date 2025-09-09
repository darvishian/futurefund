# Google Sheets Integration Setup

This guide explains how to set up Google Sheets integration for the waitlist forms.

## Prerequisites

1. Google Account
2. Google Sheets spreadsheet (you already have: https://docs.google.com/spreadsheets/d/1EM2Q6vnxBsXQii2njBM-y4b6km1_nd5lp5VI9hF4Avg/edit?usp=sharing)

## Setup Steps

### 1. Create Google Apps Script

1. Open your Google Sheet
2. Go to **Extensions > Apps Script**
3. Delete any existing code and paste this:

```javascript
function doPost(e) {
  try {
    // Open the spreadsheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getActiveSheet(); // or specify sheet name: spreadsheet.getSheetByName('Sheet1')

    // Get data from the POST request
    const data = JSON.parse(e.postData.contents);
    const { email, timestamp, source } = data;

    // Prepare row data
    const rowData = [
      new Date(timestamp), // Timestamp
      email,               // Email
      source,              // Source (hero_waitlist or footer_newsletter)
      'Pending'            // Status
    ];

    // Append to sheet
    sheet.appendRow(rowData);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Email added successfully' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Error:', error);

    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function setupHeaders() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Add headers if they don't exist
  if (sheet.getRange(1, 1).getValue() === '') {
    sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Email', 'Source', 'Status']]);
  }
}

// Add doGet function for testing
function doGet(e) {
  try {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Google Apps Script is working!',
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### 2. Deploy the Script

1. Click **Save** (floppy disk icon)
2. Click **Deploy > New deployment**
3. Select type: **Web app**
4. Description: "Future Fund Waitlist API"
5. Execute as: **Me**
6. Who has access: **Anyone** (important!)
7. Click **Deploy**
8. **Copy the deployment URL** - this is your script URL

### 3. Update the Code

Replace `YOUR_SCRIPT_ID` in both components with your actual script ID:

```javascript
// Replace this:
const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {

// With your actual script URL:
const response = await fetch('https://script.google.com/macros/s/YOUR_ACTUAL_SCRIPT_ID/exec', {
```

### 4. Set Up Sheet Headers

1. In your Google Sheet, add headers in row 1:
   - Column A: Timestamp
   - Column B: Email
   - Column C: Source
   - Column D: Status

### 5. Test the Integration

1. Deploy your website
2. Submit a test email from the waitlist form
3. Check your Google Sheet - the email should appear

## 🚨 Troubleshooting doGet Function Issues

### If you're getting a "failed status" for doGet:

### **1. Test the Script Directly**
1. In Apps Script editor, click **Run** → **Run function** → **doGet**
2. Check the execution log for errors
3. If you see "Script function not found", the script hasn't been saved

### **2. Common doGet Issues:**

**Missing Function:**
```javascript
// Add this to your script if missing:
function doGet(e) {
  return ContentService
    .createTextOutput('Hello World!')
    .setMimeType(ContentService.MimeType.TEXT);
}
```

**Syntax Errors:**
- Check for missing semicolons
- Ensure proper JSON syntax
- Verify variable declarations

**Deployment Issues:**
- Make sure you **Save** the script before deploying
- Redeploy after making changes
- Check that the new deployment URL is being used

### **3. Test the doGet Function:**

1. Save your script
2. Deploy as new deployment
3. Copy the new URL
4. Open it directly in browser: `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec`
5. Should return: `{"success":true,"message":"Google Apps Script is working!","timestamp":"..."}`

### **4. If doGet Still Fails:**

**Check Script Execution:**
```javascript
// Add this temporary function to debug:
function testScript() {
  Logger.log('Script is running');
  return 'OK';
}
```

**Redeploy Completely:**
1. Delete the current deployment
2. Create a new deployment
3. Update your website with the new URL

**Check Permissions:**
- Ensure the script has access to the spreadsheet
- Verify the spreadsheet isn't restricted

## Data Structure

The Google Sheet will receive:
- **Timestamp**: When the email was submitted
- **Email**: The email address
- **Source**: Either "hero_waitlist" or "footer_newsletter"
- **Status**: Initially set to "Pending" for manual review

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure:
- The Apps Script is deployed as a web app
- "Who has access" is set to "Anyone"
- The script URL is correct

### Script Errors
Check the Apps Script execution log:
1. Go to Apps Script editor
2. View > Logs

### Permission Issues
Make sure the Google Sheet is shared appropriately or that you're the owner.

## ✅ QUICK ALTERNATIVE: Google Forms (Much Easier!)

If Apps Script is giving you trouble, use **Google Forms** instead - it's much simpler:

### **1. Create Google Form (2 minutes)**

1. Go to [Google Forms](https://forms.google.com)
2. Click **Blank form**
3. Add questions:
   - **Email** (Short answer, Required)
   - **Source** (Short answer, can hide this field)
4. Click **Send** → **Link** → Copy the form URL

### **2. Update Your Code (Simple)**

Replace the fetch in Hero.tsx and Footer.tsx:

```javascript
// Replace this complex Apps Script call:
const response = await fetch('https://script.google.com/macros/s/...', {

// With this simple Google Forms call:
const formData = new FormData();
formData.append('entry.YOUR_FIELD_ID', email);
formData.append('entry.SOURCE_FIELD_ID', 'hero_waitlist');

const response = await fetch('https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse', {
  method: 'POST',
  body: formData,
  mode: 'no-cors'
});
```

### **3. Find Field IDs**

1. Open your form
2. Right-click → **Inspect element**
3. Look for `entry.` followed by numbers
4. Those are your field IDs

### **4. Get Form ID**

Your form URL will be: `https://docs.google.com/forms/d/YOUR_FORM_ID/edit`
Copy the ID from the URL.

**Advantages:**
- ✅ No coding required
- ✅ No deployment headaches
- ✅ Works immediately
- ✅ Data goes directly to Google Sheets
- ✅ No CORS issues

## Alternative: Google Forms Integration (Easier Setup)

If the Apps Script approach is too complex, you can use Google Forms:

### 1. Create a Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add these questions:
   - **Email** (Short answer, required)
   - **Timestamp** (Date, can be hidden)
   - **Source** (Short answer, can be hidden)
4. Get the form's action URL by:
   - Clicking "Send" → "Link" → Copy the pre-filled link
   - The URL will look like: `https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse`

### 2. Update the Code

Replace the fetch call with form submission:

```javascript
// Instead of Apps Script, use Google Forms
const formData = new FormData();
formData.append('entry.123456789', email); // Replace with your form field ID
formData.append('entry.987654321', new Date().toISOString()); // Timestamp field
formData.append('entry.555666777', 'hero_waitlist'); // Source field

const response = await fetch('https://docs.google.com/forms/u/0/d/e/YOUR_FORM_ID/formResponse', {
  method: 'POST',
  body: formData,
  mode: 'no-cors'
});
```

### 3. Find Field IDs

1. In your Google Form, click the 3 dots → "Get pre-filled link"
2. Fill in test data and copy the URL
3. The field IDs will be in the URL parameters (e.g., `entry.123456789`)

## Testing the Integration

1. Open browser developer tools (F12)
2. Go to Console tab
3. Submit an email from your form
4. Check the console logs for any errors
5. If using localStorage fallback, check Application → Local Storage

## Troubleshooting Common Issues

### CORS Errors
- **Solution**: Use `mode: 'no-cors'` in fetch options
- **Limitation**: Can't read response content, assume success

### Apps Script Not Working
- **Check**: Is the script deployed as a web app?
- **Check**: Is "Who has access" set to "Anyone"?
- **Check**: Is the script URL correct?

### Form Not Submitting
- **Check**: Are you on HTTPS? (Required for Google services)
- **Check**: Browser console for network errors
- **Check**: Form field IDs are correct

## Security Notes

- This is a basic implementation for demonstration
- In production, consider adding:
  - Email validation
  - Rate limiting
  - CAPTCHA verification
  - Data sanitization
  - HTTPS enforcement
  - Server-side validation
