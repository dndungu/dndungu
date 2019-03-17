<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/">
        <ul class="servers">
            <xsl:for-each select="/data/*">
                <li class="has-{count(apps/*)}-apps" id="{id}">
                    <xsl:for-each select="apps/*">
                        <div class="{type}">
                            <h3><xsl:value-of select="code"/></h3>
                            <h4><xsl:value-of select="name"/></h4>
                            <p><xsl:value-of select="age"/></p>
                        </div>
                    </xsl:for-each>
                </li>
            </xsl:for-each>
        </ul>
  </xsl:template>
</xsl:transform>
