FROM php:8.1-fpm

# set your user name, ex: user=bernardo
ARG user=bruno
ARG uid=1000

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libicu-dev \
    libzip-dev \
    unzip \
&& docker-php-ext-install \
    intl \
    zip \
&& pecl install xdebug \
&& docker-php-ext-enable xdebug \
&& pecl install http \
&& docker-php-ext-enable http \
&& pecl install mysql_xdevapi \
&& docker-php-ext-enable mysql_xdevapi

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

ADD https://github.com/mlocati/docker-php-extension-installer/releases/latest/download/install-php-extensions /usr/local/bin/

RUN chmod +x /usr/local/bin/install-php-extensions && sync && \
    install-php-extensions http

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd sockets

# Install redis
RUN pecl install -o -f redis \
    &&  rm -rf /tmp/pear \
    &&  docker-php-ext-enable redis

# Create system user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u $uid -d /home/$user $user
RUN mkdir -p /home/$user/.composer && \
    chown -R $user:$user /home/$user

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set working directory
WORKDIR /var/www/html

# Copy your PHP application files to the container (if applicable)
 COPY . /var/www/html

# Run composer update to install dependencies
RUN composer update --no-cache --no-interaction --no-scripts

# Expose port 9000 (adjust if necessary, depending on your web server configuration)
EXPOSE 9000

# Set working directory
WORKDIR /var/www

USER $user
