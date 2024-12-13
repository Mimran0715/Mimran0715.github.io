---
layout: post
title:  "Going Back to Old Projects - Astrophyics Paper Analysis"
date:   2024-12-13 
categories: jekyll update
---

Sometimes you have to leave a project and come back to it when you are better prepared. I took on a research project near the end of my undergrad, and despite working on it on and off for some time, dealt with many setbacks that ultimately led me to table the project shortly before starting grad school. However, now with more knowledge under my belt, I want to try tackling this project again, and hopefully have more to show for it. 

**Background**

In 2020, I reached out to a professor of mine, Dr. Krone-Martins, at the University of California, Irvine (who with I took a course on Information Retrival), to see if he had any research opportunities available. He was very supportive and encouraging, and after talking for a bit, we decided that I could work on a project revolving analyzing astrophysics research. 

Academic papers can be categorized by various bibliometrics. However, do some papers tend to have higher citation counts that others? Do papers that sound more positive and exciting, full of advancements, tend to garner more recognition, than those that sound less so? How can we determine whether this is true? Does this apply to papers of all scientific domains? What about papers that are full of jargon? By investigating these questions, can we predict what papers will be 'successful' in terms of bibliometrics? 

With these ideas in mind, we set out to develop a small prototype that would consist of extracting texts from academic papers from the NASA Astrophyics Data System (ADS) into a database, and evaluating those texts for any correlation between various bibliometrics and variables such as the text sentiment (positive, negative). We would use techniques such as clustering and decomposition to evaluate TF-IDF vectors and embeddings of the text for analysis. We would start with analyzing just the abstract texts for the prototype, and then move forward to the full text. 

As of writing this, it doesn't sound too complicated. However, having just graduate with my bachelors and working on a large research project by myself, I struggled with a lack of organization, planning, and pacing myself through the time I was working on the project. Ultimately, nearing the end I was very demotivated. Regardless, I now attempt to tackle these ideas again. 

**New Ideas**

Tackling the project now, I have outlined a step by step plan:

1. Establish a data collection pipeline that will obtain fulltext and bibliometric data from NASA ADS from the 
astronomy and astrophyics categories.
2. Extract text embeddings from the fulltext data using BERT. 
3. Conduct sentiment analysis on the text with expanded categories including exciting, dry.
4. Evaluate data for correlations between sentiment and bibliometrics. 
5. Use extracted data to train RAG for LLM. 

With developments like LLMs, chatbots, and RAG, can we use knowledge acquired from research such as the above to develop assistants that can help evaluate academic research drafts?
