<script setup>
    //import { useLesliMsg } from "lesli-vue/composables"
    //const msg = useLesliMsg()
</script>

# Msg
Vue global message constructor. It displays a message as an alert above the content on the page.


## Initialize
This plugin initializes automatically when the app is loaded and is included in every standard vue app.
It can be accessed from js (vue & pinia) like **this.msg** and from html like **msg**.

## params 

**text:** (string) Message to show to the user (do not forget to use translations) 

<br>

**Example:**

```html
<div class="buttons">
    <button class="button is-info" @click="msg.info('my info message')" >
        info
    </button>

    <button class="button is-success" @click="msg.success('my success message')" >
        success
    </button>

    <button class="button is-warning" @click="msg.warning('my warning message')" >
        warning
    </button>

    <button class="button is-danger" @click="msg.danger('my danger message')" >
        danger
    </button>
</div>
```

<br>

**Result:**

<div class="buttons">
    <button class="button is-info" @click="msg.info('my info message')" >
        info
    </button>
    <button class="button is-success" @click="msg.success('my success message')" >
        success
    </button>
    <button class="button is-warning" @click="msg.warning('my warning message')" >
        warning
    </button>
    <button class="button is-danger" @click="msg.danger('my danger message')" >
        danger
    </button>
</div>
