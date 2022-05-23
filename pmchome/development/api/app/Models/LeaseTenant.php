<?php
/**
 * Created by PhpStorm.
 * User: Kevin G. Mungai
 * Email: robisignals@gmail.com
 * WhatsApp: +254724475357
 * Date: 1/2/2021
 * Time: 9:31 AM
 */

namespace App\Models;

use App\Traits\SearchableTrait;
use Illuminate\Database\Eloquent\Model;

class LeaseTenant extends Model
{
    use SearchableTrait;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'lease_tenants';

    /**
     * Main table primary key
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'lease_id',
        'tenant_id'
    ];

    /**
     * Searchable rules.
     *
     * @var array
     */
    protected $searchable = [
        /**
         * Columns and their priority in search results.
         * Columns with higher values are more important.
         * Columns with equal values have equal importance.
         *
         * @var array
         */
        'columns' => [
            'lease_tenants.id' => 2
        ]
    ];
}
