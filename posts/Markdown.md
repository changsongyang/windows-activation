---
layout: doc
outline: [[1, 2]
title: "Markdown Extensions"
description: "VitePress comes with built in Markdown Extensions."
date: 2024-02-05
editLink: true
head:
  - - meta
    - name: keywords
      content: Examples, Markdown, Extensions
---


# Markdown Extensions

VitePress comes with built in Markdown Extensions.

## Header Anchors

Headers automatically get anchor links applied. Rendering of anchors can be configured using the `markdown.anchor` option.

### Custom anchors

To specify a custom anchor tag for a heading instead of using the auto-generated one, add a suffix to the heading:

```
# Using custom anchors {#my-anchor}
```

This allows you to link to the heading as `#my-anchor` instead of the default `#using-custom-anchors`.

## Links

Both internal and external links get special treatment.

### Internal Links

Internal links are converted to router links for SPA navigation. Also, every `index.md` contained in each sub-directory will automatically be converted to `index.html`, with corresponding URL `/`.

For example, given the following directory structure:

```
.
├─ index.md
├─ foo
│  ├─ index.md
│  ├─ one.md
│  └─ two.md
└─ bar
   ├─ index.md
   ├─ three.md
   └─ four.md
```

And providing you are in `foo/one.md`:

```md
[Home](/) <!-- sends the user to the root index.md -->
[foo](/foo/) <!-- sends the user to index.html of directory foo -->
[foo heading](./#heading) <!-- anchors user to a heading in the foo index file -->
[bar - three](../bar/three) <!-- you can omit extension -->
[bar - three](../bar/three.md) <!-- you can append .md -->
[bar - four](../bar/four.html) <!-- or you can append .html -->
```

### Page Suffix

Pages and internal links get generated with the `.html` suffix by default.

### External Links

Outbound links automatically get `target="_blank" rel="noreferrer"`:

- [vuejs.org](https://vuejs.org)
- [VitePress on GitHub](https://github.com/vuejs/vitepress)

## Frontmatter

[YAML frontmatter](https://jekyllrb.com/docs/front-matter/) is supported out of the box:

```yaml
---
title: Blogging Like a Hacker
lang: en-US
---
```

This data will be available to the rest of the page, along with all custom and theming components.

For more details, see [Frontmatter](../reference/frontmatter-config).

## GitHub-Style Tables

**Input**

```md
| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |
```

**Output**

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

## Emoji :tada:

**Input**

```
:tada: :100:
```

**Output**

:tada: :100:

A [list of all emojis](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.mjs) is available.

## Table of Contents

**Input**

```
[[toc]]
```

**Output**

[[toc]]

Rendering of the TOC can be configured using the `markdown.toc` option.

## Custom Containers

Custom containers can be defined by their types, titles, and contents.

### Default Title

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### Custom Title

You may set custom title by appending the text right after the "type" of the container.

**Input**

````md
::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to toggle the code
```js
console.log('Hello, VitePress!')
```
:::
````

**Output**

::: danger STOP
Danger zone, do not proceed
:::

::: details Click me to toggle the code
```js
console.log('Hello, VitePress!')
```
:::

Also, you may set custom titles globally by adding the following content in site config, helpful if not writing in English:

```ts
// config.ts
export default defineConfig({
  // ...
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  }
  // ...
})
```

### Additional Attributes

You can add additional attributes to the custom containers. We use [markdown-it-attrs](https://github.com/arve0/markdown-it-attrs) for this feature, and it is supported on almost all markdown elements. For example, you can set the `open` attribute to make the details block open by default:

**Input**

````md
::: details Click me to toggle the code {open}
```js
console.log('Hello, VitePress!')
```
:::
````

**Output**

::: details Click me to toggle the code {open}
```js
console.log('Hello, VitePress!')
```
:::

### `raw`

This is a special container that can be used to prevent style and router conflicts with VitePress. This is especially useful when you're documenting component libraries. You might also wanna check out [whyframe](https://whyframe.dev/docs/integrations/vitepress) for better isolation.

**Syntax**

```md
::: raw
Wraps in a `<div class="vp-raw">`
:::
```

`vp-raw` class can be directly used on elements too. Style isolation is currently opt-in:

- Install `postcss` with your preferred package manager:

  ```sh
  $ npm add -D postcss
  ```

- Create a file named `docs/postcss.config.mjs` and add this to it:

  ```js
  import { postcssIsolateStyles } from 'vitepress'

  export default {
    plugins: [postcssIsolateStyles()]
  }
  ```

  It uses [`postcss-prefix-selector`](https://github.com/RadValentin/postcss-prefix-selector) under the hood. You can pass its options like this:

  ```js
  postcssIsolateStyles({
    includeFiles: [/vp-doc\.css/] // defaults to /base\.css/
  })
  ```

## GitHub-flavored Alerts

VitePress also supports [GitHub-flavored alerts](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#alerts) to render as callouts. They will be rendered the same as the [custom containers](#custom-containers).

```md
> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.
```

> [!NOTE]
> Highlights information that users should take into account, even when skimming.

> [!TIP]
> Optional information to help a user be more successful.

> [!IMPORTANT]
> Crucial information necessary for users to succeed.

> [!WARNING]
> Critical content demanding immediate user attention due to potential risks.

> [!CAUTION]
> Negative potential consequences of an action.

## Syntax Highlighting in Code Blocks

VitePress uses [Shiki](https://github.com/shikijs/shiki) to highlight language syntax in Markdown code blocks, using coloured text. Shiki supports a wide variety of programming languages. All you need to do is append a valid language alias to the beginning backticks for the code block:

**Input**

````
```js
export default {
  name: 'MyComponent',
  // ...
}
```
````

````
```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```
````

**Output**

```js
export default {
  name: 'MyComponent'
  // ...
}
```

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

A [list of valid languages](https://shiki.style/languages) is available on Shiki's repository.

You may also customize syntax highlight theme in app config. Please see [`markdown` options](../reference/site-config#markdown) for more details.

## Line Highlighting in Code Blocks

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

In addition to a single line, you can also specify multiple single lines, ranges, or both:

- Line ranges: for example `{5-8}`, `{3-10}`, `{10-17}`
- Multiple single lines: for example `{4,7,9}`
- Line ranges and single lines: for example `{4,7-13,16,23-27,40}`

**Input**

````
```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```
````

**Output**

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum',
    }
  }
}
```

Alternatively, it's possible to highlight directly in the line by using the `// [!code highlight]` comment.

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Highlighted!' // [!!code highlight]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: 'Highlighted!' // [!code highlight]
    }
  }
}
```

## Focus in Code Blocks

Adding the `// [!code focus]` comment on a line will focus it and blur the other parts of the code.

Additionally, you can define a number of lines to focus using `// [!code focus:<lines>]`.

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!!code focus]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## Colored Diffs in Code Blocks

Adding the `// [!code --]` or `// [!code ++]` comments on a line will create a diff of that line, while keeping the colors of the codeblock.

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Removed' // [!!code --]
      msg: 'Added' // [!!code ++]
    }
  }
}
```
````

**Output**

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## Errors and Warnings in Code Blocks

Adding the `// [!code warning]` or `// [!code error]` comments on a line will color it accordingly.

**Input**

````
```js
export default {
  data () {
    return {
      msg: 'Error', // [!!code error]
      msg: 'Warning' // [!!code warning]
    }
  }
}
```
````

**Output**

```js
export default {
  data() {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## Line Numbers

You can enable line numbers for each code blocks via config:

```js
export default {
  markdown: {
    lineNumbers: true
  }
}
```

Please see [`markdown` options](../reference/site-config#markdown) for more details.

You can add `:line-numbers` / `:no-line-numbers` mark in your fenced code blocks to override the value set in config.

You can also customize the starting line number by adding `=` after `:line-numbers`. For example, `:line-numbers=2` means the line numbers in code blocks will start from `2`.

**Input**

````md
```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```
````

**Output**

```ts {1}
// line-numbers is disabled by default
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers {1}
// line-numbers is enabled
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:line-numbers=2 {1}
// line-numbers is enabled and start from 2
const line3 = 'This is line 3'
const line4 = 'This is line 4'
```

## Import Code Snippets

You can import code snippets from existing files via following syntax:

```md
<<< @/filepath
```

It also supports [line highlighting](#line-highlighting-in-code-blocks):

```md
<<< @/filepath{highlightLines}
```

**Input**

```md
<<< @/snippets/snippet.js{2}
```

**Code file**

<<< @/snippets/snippet.js

**Output**

<<< @/snippets/snippet.js{2}

::: tip
The value of `@` corresponds to the source root. By default it's the VitePress project root, unless `srcDir` is configured. Alternatively, you can also import from relative paths:

```md
<<< ../snippets/snippet.js
```

:::

You can also use a [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) to only include the corresponding part of the code file. You can provide a custom region name after a `#` following the filepath:

**Input**

```md
<<< @/snippets/snippet-with-region.js#snippet{1}
```

**Code file**

<<< @/snippets/snippet-with-region.js

**Output**

<<< @/snippets/snippet-with-region.js#snippet{1}

You can also specify the language inside the braces (`{}`) like this:

```md
<<< @/snippets/snippet.cs{c#}

<!-- with line highlighting: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#}

<!-- with line numbers: -->

<<< @/snippets/snippet.cs{1,2,4-6 c#:line-numbers}
```

This is helpful if source language cannot be inferred from your file extension.

## Code Groups

You can group multiple code blocks like this:

**Input**

````md
::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::
````

**Output**

::: code-group

```js [config.js]
/**
 * @type {import('vitepress').UserConfig}
 */
const config = {
  // ...
}

export default config
```

```ts [config.ts]
import type { UserConfig } from 'vitepress'

const config: UserConfig = {
  // ...
}

export default config
```

:::

You can also [import snippets](#import-code-snippets) in code groups:

**Input**

```md
::: code-group

<!-- filename is used as title by default -->

<<< @/snippets/snippet.js

<!-- you can provide a custom one too -->

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::
```

**Output**

::: code-group

<<< @/snippets/snippet.js

<<< @/snippets/snippet-with-region.js#snippet{1,2 ts:line-numbers} [snippet with region]

:::

## Markdown File Inclusion

You can include a markdown file in another markdown file, even nested.

::: tip
You can also prefix the markdown path with `@`, and it will act as the source root. By default, the source root is the VitePress project root, unless `srcDir` is configured.
:::

For example, you can include a relative markdown file using this:

**Input**

```md
# Docs

## Basics

<!--@include: ./parts/basics.md-->
```

**Part file** (`parts/basics.md`)

```md
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**Equivalent code**

```md
# Docs

## Basics

Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

It also supports selecting a line range:

**Input**

```md:line-numbers
# Docs

## Basics

<!--@include: ./parts/basics.md{3,}-->
```

**Part file** (`parts/basics.md`)

```md:line-numbers
Some getting started stuff.

### Configuration

Can be created using `.foorc.json`.
```

**Equivalent code**

```md:line-numbers
# Docs

## Basics

### Configuration

Can be created using `.foorc.json`.
```

The format of the selected line range can be: `{3,}`, `{,10}`, `{1,10}`

You can also use a [VS Code region](https://code.visualstudio.com/docs/editor/codebasics#_folding) to only include the corresponding part of the code file. You can provide a custom region name after a `#` following the filepath:

**Input**

```md:line-numbers
# Docs

## Basics

<!--@include: ./parts/basics.md#basic-usage{,2}-->
<!--@include: ./parts/basics.md#basic-usage{5,}-->
```

**Part file** (`parts/basics.md`)

```md:line-numbers
<!-- #region basic-usage -->
## Usage Line 1

## Usage Line 2

## Usage Line 3
<!-- #endregion basic-usage -->
```

**Equivalent code**

```md:line-numbers
# Docs

## Basics

## Usage Line 1

## Usage Line 3
```

::: warning
Note that this does not throw errors if your file is not present. Hence, when using this feature make sure that the contents are being rendered as expected.
:::

Instead of VS Code regions, you can also use header anchors to include a specific section of the file. For example, if you have a header in your markdown file like this:

```md
## My Base Section

Some content here.

### My Sub Section

Some more content here.

## Another Section

Content outside `My Base Section`.
```

You can include the `My Base Section` section like this:

```md
## My Extended Section
<!--@include: ./parts/basics.md#my-base-section-->
```

**Equivalent code**

```md
## My Extended Section

Some content here.

### My Sub Section

Some more content here.
```

Here, `my-base-section` is the generated id of the heading element. In case it's not easily guessable, you can open the part file in your browser and click on the heading anchor (`#` symbol left to the heading when hovered) to see the id in the URL bar. Or use browser dev tools to inspect the element. Alternatively, you can also specify the id to the part file like this:

```md
## My Base Section {#custom-id}
```

and include it like this:

```md
<!--@include: ./parts/basics.md#custom-id-->
```

## Math Equations

This is currently opt-in. To enable it, you need to install `markdown-it-mathjax3` and set `markdown.math` to `true` in your config file:

```sh
npm add -D markdown-it-mathjax3
```

```ts [.vitepress/config.ts]
export default {
  markdown: {
    math: true
  }
}
```

**Input**

```md
When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Maxwell's equations:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |
```

**Output**

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

**Maxwell's equations:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |

## Image Lazy Loading

You can enable lazy loading for each image added via markdown by setting `lazyLoading` to `true` in your config file:

```js
export default {
  markdown: {
    image: {
      // image lazy loading is disabled by default
      lazyLoading: true
    }
  }
}
```

## Advanced Configuration

VitePress uses [markdown-it](https://github.com/markdown-it/markdown-it) as the Markdown renderer. A lot of the extensions above are implemented via custom plugins. You can further customize the `markdown-it` instance using the `markdown` option in `.vitepress/config.js`:

```js
import { defineConfig } from 'vitepress'
import markdownItAnchor from 'markdown-it-anchor'
import markdownItFoo from 'markdown-it-foo'

export default defineConfig({
  markdown: {
    // options for markdown-it-anchor
    // https://github.com/valeriangalliat/markdown-it-anchor#usage
    anchor: {
      permalink: markdownItAnchor.permalink.headerLink()
    },

    // options for @mdit-vue/plugin-toc
    // https://github.com/mdit-vue/mdit-vue/tree/main/packages/plugin-toc#options
    toc: { level: [1, 2] },

    config: (md) => {
      // use more markdown-it plugins!
      md.use(markdownItFoo)
    }
  }
})
```

See full list of configurable properties in [Config Reference: App Config](../reference/site-config#markdown).



# Internationalization

To use the built-in i18n features, one needs to create a directory structure as follows:

```
docs/
├─ es/
│  ├─ foo.md
├─ fr/
│  ├─ foo.md
├─ foo.md
```

Then in `docs/.vitepress/config.ts`:

```ts [docs/.vitepress/config.ts]
import { defineConfig } from 'vitepress'

export default defineConfig({
  // shared properties and other top-level stuff...

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '/fr/guide' // default /fr/ -- shows on navbar translations menu, can be external

      // other locale specific properties...
    }
  }
})
```

The following properties can be overridden for each locale (including root):

```ts
interface LocaleSpecificConfig<ThemeConfig = any> {
  lang?: string
  dir?: string
  title?: string
  titleTemplate?: string | boolean
  description?: string
  head?: HeadConfig[] // will be merged with existing head entries, duplicate meta tags are automatically removed
  themeConfig?: ThemeConfig // will be shallow merged, common stuff can be put in top-level themeConfig entry
}
```

Refer [`DefaultTheme.Config`](https://github.com/vuejs/vitepress/blob/main/types/default-theme.d.ts) interface for details on customizing the placeholder texts of the default theme. Don't override `themeConfig.algolia` or `themeConfig.carbonAds` at locale-level. Refer [Algolia docs](../reference/default-theme-search#i18n) for using multilingual search.

**Pro tip:** Config file can be stored at `docs/.vitepress/config/index.ts` too. It might help you organize stuff by creating a configuration file per locale and then merge and export them from `index.ts`.

## Separate directory for each locale

The following is a perfectly fine structure:

```
docs/
├─ en/
│  ├─ foo.md
├─ es/
│  ├─ foo.md
├─ fr/
   ├─ foo.md
```

However, VitePress won't redirect `/` to `/en/` by default. You'll need to configure your server for that. For example, on Netlify, you can add a `docs/public/_redirects` file like this:

```
/*  /es/:splat  302  Language=es
/*  /fr/:splat  302  Language=fr
/*  /en/:splat  302
```

**Pro tip:** If using the above approach, you can use `nf_lang` cookie to persist user's language choice:

```ts [docs/.vitepress/theme/index.ts]
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout
}
```

```vue [docs/.vitepress/theme/Layout.vue]
<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData, inBrowser } from 'vitepress'
import { watchEffect } from 'vue'

const { lang } = useData()
watchEffect(() => {
  if (inBrowser) {
    document.cookie = `nf_lang=${lang.value}; expires=Mon, 1 Jan 2030 00:00:00 UTC; path=/`
  }
})
</script>

<template>
  <DefaultTheme.Layout />
</template>
```

## RTL Support (Experimental)

For RTL support, specify `dir: 'rtl'` in config and use some RTLCSS PostCSS plugin like <https://github.com/MohammadYounes/rtlcss>, <https://github.com/vkalinichev/postcss-rtl> or <https://github.com/elchininet/postcss-rtlcss>. You'll need to configure your PostCSS plugin to use `:where([dir="ltr"])` and `:where([dir="rtl"])` as prefixes to prevent CSS specificity issues.



# Site Config

Site config is where you can define the global settings of the site. App config options define settings that apply to every VitePress site, regardless of what theme it is using. For example, the base directory or the title of the site.

## Overview

### Config Resolution

The config file is always resolved from `<root>/.vitepress/config.[ext]`, where `<root>` is your VitePress [project root](../guide/routing#root-and-source-directory), and `[ext]` is one of the supported file extensions. TypeScript is supported out of the box. Supported extensions include `.js`, `.ts`, `.mjs`, and `.mts`.

It is recommended to use ES modules syntax in config files. The config file should default export an object:

```ts
export default {
  // app level config options
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',
  ...
}
```

:::details Dynamic (Async) Config

If you need to dynamically generate the config, you can also default export a function. For example:

```ts
import { defineConfig } from 'vitepress'

export default async () => {
  const posts = await (await fetch('https://my-cms.com/blog-posts')).json()

  return defineConfig({
    // app level config options
    lang: 'en-US',
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',

    // theme level config options
    themeConfig: {
      sidebar: [
        ...posts.map((post) => ({
          text: post.name,
          link: `/posts/${post.name}`
        }))
      ]
    }
  })
}
```

You can also use top-level `await`. For example:

```ts
import { defineConfig } from 'vitepress'

const posts = await (await fetch('https://my-cms.com/blog-posts')).json()

export default defineConfig({
  // app level config options
  lang: 'en-US',
  title: 'VitePress',
  description: 'Vite & Vue powered static site generator.',

  // theme level config options
  themeConfig: {
    sidebar: [
      ...posts.map((post) => ({
        text: post.name,
        link: `/posts/${post.name}`
      }))
    ]
  }
})
```

:::

### Config Intellisense

Using the `defineConfig` helper will provide TypeScript-powered intellisense for config options. Assuming your IDE supports it, this should work in both JavaScript and TypeScript.

```js
import { defineConfig } from 'vitepress'

export default defineConfig({
  // ...
})
```

### Typed Theme Config

By default, `defineConfig` helper expects the theme config type from default theme:

```ts
import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    // Type is `DefaultTheme.Config`
  }
})
```

If you use a custom theme and want type checks for the theme config, you'll need to use `defineConfigWithTheme` instead, and pass the config type for your custom theme via a generic argument:

```ts
import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'your-theme'

export default defineConfigWithTheme<ThemeConfig>({
  themeConfig: {
    // Type is `ThemeConfig`
  }
})
```

### Vite, Vue & Markdown Config

- **Vite**

  You can configure the underlying Vite instance using the [vite](#vite) option in your VitePress config. No need to create a separate Vite config file.

- **Vue**

  VitePress already includes the official Vue plugin for Vite ([@vitejs/plugin-vue](https://github.com/vitejs/vite-plugin-vue)). You can configure its options using the [vue](#vue) option in your VitePress config.

- **Markdown**

  You can configure the underlying [Markdown-It](https://github.com/markdown-it/markdown-it) instance using the [markdown](#markdown) option in your VitePress config.

## Site Metadata

### title

- Type: `string`
- Default: `VitePress`
- Can be overridden per page via [frontmatter](./frontmatter-config#title)

Title for the site. When using the default theme, this will be displayed in the nav bar.

It will also be used as the default suffix for all individual page titles, unless [`titleTemplate`](#titletemplate) is defined. An individual page's final title will be the text content of its first `<h1>` header, combined with the global `title` as the suffix. For example with the following config and page content:

```ts
export default {
  title: 'My Awesome Site'
}
```

```md
# Hello
```

The title of the page will be `Hello | My Awesome Site`.

### titleTemplate

- Type: `string | boolean`
- Can be overridden per page via [frontmatter](./frontmatter-config#titletemplate)

Allows customizing each page's title suffix or the entire title. For example:

```ts
export default {
  title: 'My Awesome Site',
  titleTemplate: 'Custom Suffix'
}
```

```md
# Hello
```

The title of the page will be `Hello | Custom Suffix`.

To completely customize how the title should be rendered, you can use the `:title` symbol in `titleTemplate`:

```ts
export default {
  titleTemplate: ':title - Custom Suffix'
}
```

Here `:title` will be replaced with the text inferred from the page's first `<h1>` header. The title of the previous example page will be `Hello - Custom Suffix`.

The option can be set to `false` to disable title suffixes.

### description

- Type: `string`
- Default: `A VitePress site`
- Can be overridden per page via [frontmatter](./frontmatter-config#description)

Description for the site. This will render as a `<meta>` tag in the page HTML.

```ts
export default {
  description: 'A VitePress site'
}
```

### head

- Type: `HeadConfig[]`
- Default: `[]`
- Can be appended per page via [frontmatter](./frontmatter-config#head)

Additional elements to render in the `<head>` tag in the page HTML. The user-added tags are rendered before the closing `head` tag, after VitePress tags.

```ts
type HeadConfig =
  | [string, Record<string, string>]
  | [string, Record<string, string>, string]
```

#### Example: Adding a favicon

```ts
export default {
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]]
} // put favicon.ico in public directory, if base is set, use /base/favicon.ico

/* Would render:
  <link rel="icon" href="/favicon.ico">
*/
```

#### Example: Adding Google Fonts

```ts
export default {
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap', rel: 'stylesheet' }
    ]
  ]
}

/* Would render:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
*/
```

#### Example: Registering a service worker

```ts
export default {
  head: [
    [
      'script',
      { id: 'register-sw' },
      `;(() => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
        }
      })()`
    ]
  ]
}

/* Would render:
  <script id="register-sw">
    ;(() => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
      }
    })()
  </script>
*/
```

#### Example: Using Google Analytics

```ts
export default {
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
    ]
  ]
}

/* Would render:
  <script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'TAG_ID');
  </script>
*/
```

### lang

- Type: `string`
- Default: `en-US`

The lang attribute for the site. This will render as a `<html lang="en-US">` tag in the page HTML.

```ts
export default {
  lang: 'en-US'
}
```

### base

- Type: `string`
- Default: `/`

The base URL the site will be deployed at. You will need to set this if you plan to deploy your site under a sub path, for example, GitHub pages. If you plan to deploy your site to `https://foo.github.io/bar/`, then you should set base to `'/bar/'`. It should always start and end with a slash.

The base is automatically prepended to all the URLs that start with / in other options, so you only need to specify it once.

```ts
export default {
  base: '/base/'
}
```

## Routing

### cleanUrls

- Type: `boolean`
- Default: `false`

When set to `true`, VitePress will remove the trailing `.html` from URLs. Also see [Generating Clean URL](../guide/routing#generating-clean-url).

::: warning Server Support Required
Enabling this may require additional configuration on your hosting platform. For it to work, your server must be able to serve `/foo.html` when visiting `/foo` **without a redirect**.
:::

### rewrites

- Type: `Record<string, string>`

Defines custom directory &lt;-&gt; URL mappings. See [Routing: Route Rewrites](../guide/routing#route-rewrites) for more details.

```ts
export default {
  rewrites: {
    'source/:page': 'destination/:page'
  }
}
```

## Build

### srcDir

- Type: `string`
- Default: `.`

The directory where your markdown pages are stored, relative to project root. Also see [Root and Source Directory](../guide/routing#root-and-source-directory).

```ts
export default {
  srcDir: './src'
}
```

### srcExclude

- Type: `string[]`
- Default: `undefined`

A [glob pattern](https://github.com/mrmlnc/fast-glob#pattern-syntax) for matching markdown files that should be excluded as source content.

```ts
export default {
  srcExclude: ['**/README.md', '**/TODO.md']
}
```

### outDir

- Type: `string`
- Default: `./.vitepress/dist`

The build output location for the site, relative to [project root](../guide/routing#root-and-source-directory).

```ts
export default {
  outDir: '../public'
}
```

### assetsDir

- Type: `string`
- Default: `assets`

Specify the directory to nest generated assets under. The path should be inside [`outDir`](#outdir) and is resolved relative to it.

```ts
export default {
  assetsDir: 'static'
}
```

### cacheDir

- Type: `string`
- Default: `./.vitepress/cache`

The directory for cache files, relative to [project root](../guide/routing#root-and-source-directory). See also: [cacheDir](https://vitejs.dev/config/shared-options.html#cachedir).

```ts
export default {
  cacheDir: './.vitepress/.vite'
}
```

### ignoreDeadLinks

- Type: `boolean | 'localhostLinks' | (string | RegExp | ((link: string) => boolean))[]`
- Default: `false`

When set to `true`, VitePress will not fail builds due to dead links.

When set to `'localhostLinks'`, the build will fail on dead links, but won't check `localhost` links.

```ts
export default {
  ignoreDeadLinks: true
}
```

It can also be an array of exact url string, regex patterns, or custom filter functions.

```ts
export default {
  ignoreDeadLinks: [
    // ignore exact url "/playground"
    '/playground',
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('ignore')
    }
  ]
}
```

### metaChunk <Badge type="warning" text="experimental" />

- Type: `boolean`
- Default: `false`

When set to `true`, extract pages metadata to a separate JavaScript chunk instead of inlining it in the initial HTML. This makes each page's HTML payload smaller and makes the pages metadata cacheable, thus reducing server bandwidth when you have many pages in the site.

### mpa <Badge type="warning" text="experimental" />

- Type: `boolean`
- Default: `false`

When set to `true`, the production app will be built in [MPA Mode](../guide/mpa-mode). MPA mode ships 0kb JavaScript by default, at the cost of disabling client-side navigation and requires explicit opt-in for interactivity.

## Theming

### appearance

- Type: `boolean | 'dark' | 'force-dark' | 'force-auto' | import('@vueuse/core').UseDarkOptions`
- Default: `true`

Whether to enable dark mode (by adding the `.dark` class to the `<html>` element).

- If the option is set to `true`, the default theme will be determined by the user's preferred color scheme.
- If the option is set to `dark`, the theme will be dark by default, unless the user manually toggles it.
- If the option is set to `false`, users will not be able to toggle the theme.
- If the option is set to `'force-dark'`, the theme will always be dark and users will not be able to toggle it.
- If the option is set to `'force-auto'`, the theme will always be determined by the user's preferred color scheme and users will not be able to toggle it.

This option injects an inline script that restores users settings from local storage using the `vitepress-theme-appearance` key. This ensures the `.dark` class is applied before the page is rendered to avoid flickering.

`appearance.initialValue` can only be `'dark' | undefined`. Refs or getters are not supported.

### lastUpdated

- Type: `boolean`
- Default: `false`

Whether to get the last updated timestamp for each page using Git. The timestamp will be included in each page's page data, accessible via [`useData`](./runtime-api#usedata).

When using the default theme, enabling this option will display each page's last updated time. You can customize the text via [`themeConfig.lastUpdatedText`](./default-theme-config#lastupdatedtext) option.

## Customization

### markdown

- Type: `MarkdownOption`

Configure Markdown parser options. VitePress uses [Markdown-it](https://github.com/markdown-it/markdown-it) as the parser, and [Shiki](https://github.com/shikijs/shiki) to highlight language syntax. Inside this option, you may pass various Markdown related options to fit your needs.

```js
export default {
  markdown: {...}
}
```

Check the [type declaration and jsdocs](https://github.com/vuejs/vitepress/blob/main/src/node/markdown/markdown.ts) for all the options available.

### vite

- Type: `import('vite').UserConfig`

Pass raw [Vite Config](https://vitejs.dev/config/) to internal Vite dev server / bundler.

```js
export default {
  vite: {
    // Vite config options
  }
}
```

### vue

- Type: `import('@vitejs/plugin-vue').Options`

Pass raw [`@vitejs/plugin-vue` options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#options) to the internal plugin instance.

```js
export default {
  vue: {
    // @vitejs/plugin-vue options
  }
}
```

## Build Hooks

VitePress build hooks allow you to add new functionality and behaviors to your website:

- Sitemap
- Search Indexing
- PWA
- Teleports

### buildEnd

- Type: `(siteConfig: SiteConfig) => Awaitable<void>`

`buildEnd` is a build CLI hook, it will run after build (SSG) finish but before VitePress CLI process exits.

```ts
export default {
  async buildEnd(siteConfig) {
    // ...
  }
}
```

### postRender

- Type: `(context: SSGContext) => Awaitable<SSGContext | void>`

`postRender` is a build hook, called when SSG rendering is done. It will allow you to handle the teleports content during SSG.

```ts
export default {
  async postRender(context) {
    // ...
  }
}
```

```ts
interface SSGContext {
  content: string
  teleports?: Record<string, string>
  [key: string]: any
}
```

### transformHead

- Type: `(context: TransformContext) => Awaitable<HeadConfig[]>`

`transformHead` is a build hook to transform the head before generating each page. It will allow you to add head entries that cannot be statically added to your VitePress config. You only need to return extra entries, they will be merged automatically with the existing ones.

::: warning
Don't mutate anything inside the `context`.
:::

```ts
export default {
  async transformHead(context) {
    // ...
  }
}
```

```ts
interface TransformContext {
  page: string // e.g. index.md (relative to srcDir)
  assets: string[] // all non-js/css assets as fully resolved public URL
  siteConfig: SiteConfig
  siteData: SiteData
  pageData: PageData
  title: string
  description: string
  head: HeadConfig[]
  content: string
}
```

Note that this hook is only called when generating the site statically. It is not called during dev. If you need to add dynamic head entries during dev, you can use the [`transformPageData`](#transformpagedata) hook instead:

```ts
export default {
  transformPageData(pageData) {
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'meta',
      {
        name: 'og:title',
        content:
          pageData.frontmatter.layout === 'home'
            ? `VitePress`
            : `${pageData.title} | VitePress`
      }
    ])
  }
}
```

#### Example: Adding a canonical URL `<link>`

```ts
export default {
  transformPageData(pageData) {
    const canonicalUrl = `https://example.com/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  }
}
```

### transformHtml

- Type: `(code: string, id: string, context: TransformContext) => Awaitable<string | void>`

`transformHtml` is a build hook to transform the content of each page before saving to disk.

::: warning
Don't mutate anything inside the `context`. Also, modifying the html content may cause hydration problems in runtime.
:::

```ts
export default {
  async transformHtml(code, id, context) {
    // ...
  }
}
```

### transformPageData

- Type: `(pageData: PageData, context: TransformPageContext) => Awaitable<Partial<PageData> | { [key: string]: any } | void>`

`transformPageData` is a hook to transform the `pageData` of each page. You can directly mutate `pageData` or return changed values which will be merged into the page data.

::: warning
Don't mutate anything inside the `context` and be careful that this might impact the performance of dev server, especially if you have some network requests or heavy computations (like generating images) in the hook. You can check for `process.env.NODE_ENV === 'production'` for conditional logic.
:::

```ts
export default {
  async transformPageData(pageData, { siteConfig }) {
    pageData.contributors = await getPageContributors(pageData.relativePath)
  }

  // or return data to be merged
  async transformPageData(pageData, { siteConfig }) {
    return {
      contributors: await getPageContributors(pageData.relativePath)
    }
  }
}
```

```ts
interface TransformPageContext {
  siteConfig: SiteConfig
}
```
